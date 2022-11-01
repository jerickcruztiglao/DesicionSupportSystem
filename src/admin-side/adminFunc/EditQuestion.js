import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

function EditQuestion({ id, strand, question, A, B, C, D, ans }) {
  const [payload, setPayload] = React.useState({
    id: id,
    strand: strand,
    question: question,
    choiceA: A,
    choiceB: B,
    choiceC: C,
    choiceD: D,
    answer: ans,
  });
  const handleChange = (prop) => (event) => {
    setPayload({ ...payload, [prop]: event.target.value });
  };
  const handleSave = async () => {
    if (window.confirm("Save Changes?")) {
      await updateDoc(doc(db, "Questions", id), {
        strand: payload.strand,
        question: payload.question,
        choice1: payload.choiceA,
        choice2: payload.choiceB,
        choice3: payload.choiceC,
        choice4: payload.choiceD,
        answer: payload.answer,
      });
      window.location.reload(true);
    }
  };
  return (
    <Box>
      <FormControl sx={{ width: 150, margin: 2, float: "left" }} size='small'>
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
      <Button
        variant='text'
        sx={{ float: "right", margin: 1 }}
        onClick={handleSave}
      >
        <SaveAltIcon />
        Save
      </Button>
      <TextField
        id='filled-multiline-static'
        value={payload.question}
        label='Question'
        multiline
        rows={2}
        variant='outlined'
        fullWidth
        sx={{ marginTop: 2 }}
        autoComplete='off'
        onChange={handleChange("question")}
      />
      <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 1 }}>
        <TextField
          id='filled-multiline-static'
          value={payload.choiceA}
          label='Choice A'
          variant='outlined'
          fullWidth
          sx={{ marginTop: 2 }}
          autoComplete='off'
          onChange={handleChange("choiceA")}
        />
        <TextField
          id='filled-multiline-static'
          value={payload.choiceB}
          label='Choice B'
          variant='outlined'
          fullWidth
          sx={{ marginTop: 2 }}
          autoComplete='off'
          onChange={handleChange("choiceB")}
        />
        <TextField
          id='filled-multiline-static'
          value={payload.choiceC}
          label='Choice C'
          variant='outlined'
          fullWidth
          sx={{ marginTop: 2 }}
          autoComplete='off'
          onChange={handleChange("choiceC")}
        />
        <TextField
          id='filled-multiline-static'
          value={payload.choiceD}
          label='Choice D'
          variant='outlined'
          fullWidth
          sx={{ marginTop: 2 }}
          autoComplete='off'
          onChange={handleChange("choiceD")}
        />
        <TextField
          id='filled-multiline-static'
          value={payload.answer}
          label='Correct Answer'
          variant='standard'
          fullWidth
          sx={{ marginTop: 2 }}
          autoComplete='off'
          onChange={handleChange("answer")}
        />
      </Box>
    </Box>
  );
}

export default EditQuestion;
