import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { db } from "../../utils/firebase";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

const style = {
  clearSelection: {
    fontStyle: "italic",
    textDecoration: "underline",
    float: "right",
    display: "block",
    cursor: "pointer",
    "&:hover": { color: "#1A7EB6" },
  },
};

function QuestionareUI({ id, data, userId }) {
  const [payload, setPayload] = React.useState({
    selectedRadio: "",
  });
  const handleChange = (prop) => (event) => {
    setPayload({ ...payload, [prop]: event.target.value });
  };
  const clearSelection = async (qID) => {
    setPayload({ ...payload, selectedRadio: "" })
    setHasAns(false)
    await deleteDoc(doc(db, "Students", userId, "Answers", qID));
  };

  useEffect(() => {
    const setAns = async () => {
      await setDoc(
        doc(db, "Students", userId, "Answers", id),
        {
          questionStrand: data.strand,
          userAnswer: payload.selectedRadio,
          isCorrect: payload.selectedRadio === data.answer ? true : false,
        },
        { merge: true }
      );
    };
    if (payload.selectedRadio !== "") {
      setAns();
    }
  }, [data.answer, data.strand, id, payload.selectedRadio, userId]);

  const [hasAns, setHasAns] = useState(false);
  const [ans, setAns] = useState("")
  useEffect(() => {
    const unsubscribe = async () => {
      const docRef = (doc(db, "Students", userId, "Answers", id));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setHasAns(true)
        setAns(docSnap.data().userAnswer);
      }
    }
    unsubscribe()
  }, [payload.selectedRadio, id, userId])
  return (
    <Card sx={{
      margin: "15px 0px 0px 0px",
      padding: "20px 20px 0px 30px",
      backgroundColor: (theme) => hasAns === true ? '#77DD77' : `${theme.palette.secondary.main}`,
    }}>
      <Typography sx={{ fontSize: 24, fontWeight: "bold", letterSpacing: 1 }}>{data.strand}</Typography>
      <Divider sx={{ margin: "10px 0px", backgroundColor: "#555" }} />
      <Typography variant='h5'>{data.question}</Typography>
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={hasAns === true ? ans : payload.selectedRadio}
        onChange={handleChange("selectedRadio")}
      >
        <FormControlLabel
          value={data.choice1}
          control={<Radio />}
          label={data.choice1}
        />
        <FormControlLabel
          value={data.choice2}
          control={<Radio />}
          label={data.choice2}
        />
        <FormControlLabel
          value={data.choice3}
          control={<Radio />}
          label={data.choice3}
        />
        <FormControlLabel
          value={data.choice4}
          control={<Radio />}
          label={data.choice4}
        />
      </RadioGroup>

      <Typography
        variant='overline'
        sx={style.clearSelection}
        component='div'
        onClick={() => clearSelection(id)}
      >
        Clear Selection
      </Typography>
    </Card>
  );
}

export default QuestionareUI;
