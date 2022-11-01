import {
  Box,
  Card,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { db } from "../../utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const style = {
  root: {
    width: "100%",
    paddingBottom: 5
  },
  cardContainer: {
    margin: "0px 15px 0px 15px",
    padding: "20px",
    backgroundColor: (theme) => `${theme.palette.secondary.main}`,
    width: 1400
  },
  clearSelection: {
    fontStyle: "italic",
    textDecoration: "underline",
    float: "right",
    display: "block",
    cursor: "pointer",
    "&:hover": { color: "#1A7EB6" },
  },
};

function AddQuestion() {
  let navigate = useNavigate();

  const [payload, setPayload] = React.useState({
    strand: "",
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: "",
  });

  const handleChange = (prop) => (event) => {
    setPayload({ ...payload, [prop]: event.target.value });
  };
  const handleAdd = async () => {
    if (
      payload.strand === "" ||
      payload.question === "" ||
      payload.choice1 === "" ||
      payload.choice2 === "" ||
      payload.choice3 === "" ||
      payload.choice4 === "" ||
      payload.answer === ""
    ) {
      alert("Somefields are empty");
    } else {
      await addDoc(collection(db, "Questions"), {
        strand: payload.strand,
        question: payload.question,
        choice1: payload.choice1,
        choice2: payload.choice2,
        choice3: payload.choice3,
        choice4: payload.choice4,
        answer: payload.answer,
      });
      handleClear();
      setIsShow(false);
    }
  };
  const handleClear = () => {
    setPayload({
      ...payload,
      strand: "",
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      answer: "",
    });
  };

  const handleSave = () => {
    if (window.confirm("Save Changes?")) {
      navigate("/admin/dashboard")
    }
  };

  const [isShow, setIsShow] = React.useState(false);
  const handleOnAdd = () => {
    setIsShow(true);
  };
  const handleOnCancel = () => {
    handleClear();
    setIsShow(false);
  };
  return (
    <Box sx={style.root}>
      {isShow ? (
        <Box component={Grid} container alignItems="center" justifyContent='center' >
          <Card sx={style.cardContainer}>
            <FormControl
              sx={{ width: 150, margin: 2, float: "left" }}
              size='small'
            >
              <InputLabel id='demo-simple-select-label'>Strand</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={payload.strand}
                label='Strand'
                onChange={handleChange("strand")}
              >
                <MenuItem value='ABM'>ABM</MenuItem>
                <MenuItem value='STEM'>STEM</MenuItem>
                <MenuItem value='HUMMS'>HUMMS</MenuItem>
                <MenuItem value='TVL'>TVL</MenuItem>
                <MenuItem value='GAS'>GAS</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ float: "right", margin: 1 }}>
              <Button
                variant='contained'
                color='success'
                sx={{ margin: 1 }}
                onClick={handleAdd}
              >
                <AddIcon />
                Add
              </Button>
              <Button
                variant='contained'
                color='error'
                sx={{ margin: 1 }}
                onClick={handleOnCancel}
              >
                <DeleteIcon />
                Cancel
              </Button>
            </Box>
            <TextField
              id='filled-multiline-static'
              value={payload.question}
              label='Question'
              multiline
              rows={2}
              variant='filled'
              fullWidth
              onChange={handleChange("question")}
            />
            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 1 }}>
              <TextField
                id='filled-multiline-static'
                label='Choice A'
                value={payload.choice1}
                variant='filled'
                fullWidth
                autoComplete='off'
                onChange={handleChange("choice1")}
              />
              <TextField
                id='filled-multiline-static'
                label='Choice B'
                value={payload.choice2}
                variant='filled'
                fullWidth
                autoComplete='off'
                onChange={handleChange("choice2")}
              />
              <TextField
                id='filled-multiline-static'
                label='Choice C'
                value={payload.choice3}
                variant='filled'
                fullWidth
                autoComplete='off'
                onChange={handleChange("choice3")}
              />
              <TextField
                id='filled-multiline-static'
                label='Choice D'
                value={payload.choice4}
                variant='filled'
                fullWidth
                autoComplete='off'
                onChange={handleChange("choice4")}
              />
              <TextField
                id='filled-multiline-static'
                label='Correct Answer'
                value={payload.answer}
                variant='filled'
                fullWidth
                autoComplete='off'
                sx={{ marginTop: 2 }}
                onChange={handleChange("answer")}
              />
            </Box>
            <Button
              variant='outlined'
              sx={{ float: "right", margin: "10px 5px 0px 5px " }}
              onClick={handleClear}
            >
              <ClearIcon />
              Clear
            </Button>
          </Card>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant='contained'
            sx={{
              width: "350px",
              height: "60px",
              margin: 1,
            }}
            onClick={handleOnAdd}
          >
          <AddIcon />
            Add Question
          </Button>
          <Button
            variant='contained'
            sx={{
              width: "350px",
              height: "60px",
              margin: 1,
            }}
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default AddQuestion;
