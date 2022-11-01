import React, { useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AddQuestion from "./AddQuestion";
import EditQuestion from "./EditQuestion";
import { db } from "../../utils/firebase";
import { Helmet } from "react-helmet";
import logo from '../../images/image1.png';
import {
  collection,
  onSnapshot,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
const style = {
  root: {
    background: (theme) =>
      `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    minHeight: "100vh",
    width: "100%",
    paddingTop: {
      xs: 2,
      sm: 3,
      md: 3,
    },
    paddingBottom: {
      xs: 10,
      sm: 20,
      md: 20,
    },
  },
  cardContainer: {
    margin: "0px 15px 15px 15px",
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
  section1: {
    alignItems: "center",
    maxWidth: 1400,
  },
};

function ViewQuestion() {
  const [toEdit, setToEdit] = React.useState({
    qId: "",
    strand: "",
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: "",
  });
  const [qSets, setQSets] = React.useState([]);
  const [isClicked, setIsClicked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleOnEdit = (
    qId,
    strand,
    question,
    choice1,
    choice2,
    choice3,
    choice4,
    answer
  ) => {
    setToEdit({
      ...toEdit,
      qId: qId,
      strand: strand,
      question: question,
      choice1: choice1,
      choice2: choice2,
      choice3: choice3,
      choice4: choice4,
      answer: answer,
    });
    setIsClicked(true);
  };
  const handleDelete = async (qId) => {
    if (window.confirm("Are you sure you want to DELETE?")) {
      await deleteDoc(doc(db, "Questions", qId));
    }
  };
  const handleOnDiscard = () => {
    if (window.confirm("Discard changes?")) {
      setToEdit({
        ...toEdit,
        qId: "",
        strand: "",
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
      });
      setIsClicked(false);
    }
  };
  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, "Questions"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setLoading(false);
      setQSets(data);
    });
    return unsubscribe;
  }, []);

  return (
    <Box sx={style.root} component={Grid}>
      <Helmet>
        <title>Questions</title>
        <link rel="Decision Support Icon" href={logo} />
      </Helmet>
      {
        loading === true ?
          <Box component={Grid} container alignItems="center" justifyContent='center' style={{
            padding: 100
          }}>
            <CircularProgress color="secondary" size={100}/>
          </Box> :
          <>
            {qSets &&
              qSets.map(({ data, id }) => (
                <Box component={Grid} container alignItems="center" justifyContent='center' key={id}>
                  <Card sx={style.cardContainer} >
                    {isClicked && toEdit.qId === id ? (
                      <Box>
                        <Button
                          variant='text'
                          color='error'
                          sx={{ float: "right", margin: 1 }}
                          onClick={handleOnDiscard}
                        >
                          <ClearIcon />
                          Discard
                        </Button>
                        <EditQuestion
                          id={toEdit.qId}
                          strand={toEdit.strand}
                          question={toEdit.question}
                          A={toEdit.choice1}
                          B={toEdit.choice2}
                          C={toEdit.choice3}
                          D={toEdit.choice4}
                          ans={toEdit.answer}
                        />
                      </Box>
                    ) : (
                      <Box>
                        <Box sx={{ float: "right" }}>
                          <Button
                            variant='contained'
                            sx={{ margin: 1 }}
                            onClick={() =>
                              handleOnEdit(
                                id,
                                data.strand,
                                data.question,
                                data.choice1,
                                data.choice2,
                                data.choice3,
                                data.choice4,
                                data.answer
                              )
                            }
                          >
                            <EditIcon />
                            Edit
                          </Button>
                          <Button
                            variant='contained'
                            color='error'
                            sx={{ margin: 1 }}
                            onClick={() => handleDelete(id)}
                          >
                            <DeleteIcon />
                            Delete
                          </Button>
                        </Box>
                        <Typography sx={{fontWeight: 'bolder', fontSize: 20}}>{data.question}</Typography>

                        <RadioGroup
                          aria-labelledby='demo-controlled-radio-buttons-group'
                          name='controlled-radio-buttons-group'
                          value={data.answer}
                        >
                          <FormControlLabel
                            value={data.choice1}
                            control={
                              <Radio
                                disabled={data.choice1 === data.answer ? false : true}
                              />
                            }
                            label={data.choice1}
                          />
                          <FormControlLabel
                            value={data.choice2}
                            control={
                              <Radio
                                disabled={data.choice2 === data.answer ? false : true}
                              />
                            }
                            label={data.choice2}
                          />
                          <FormControlLabel
                            value={data.choice3}
                            control={
                              <Radio
                                disabled={data.choice3 === data.answer ? false : true}
                              />
                            }
                            label={data.choice3}
                          />
                          <FormControlLabel
                            value={data.choice4}
                            control={
                              <Radio
                                disabled={data.choice4 === data.answer ? false : true}
                              />
                            }
                            label={data.choice4}
                          />
                        </RadioGroup>
                      </Box>
                    )}
                  </Card>
                </Box>
              ))}
          </>
      }
      <AddQuestion />

    </Box>
  );
}
export default ViewQuestion;
