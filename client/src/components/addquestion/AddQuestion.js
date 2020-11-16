import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import APIService from '../../service/APIService';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [level, setLevel] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = event => {
    setLevel(event.target.value);
  };
  const handleQuestionChange = event => {
    setQuestion(event.target.value);
  };
  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };
  const handleAnswerChange = event => {
    setAnswer(event.target.value);
  };

  return (
    <>
      <h3>Add your question here</h3>
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Difficulity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={level}
            onChange={handleChange}
          >
            <MenuItem value={'easy'}>Easy</MenuItem>
            <MenuItem value={'normal'}>Normal</MenuItem>
            <MenuItem value={'hard'}>Hard</MenuItem>
          </Select>
        </FormControl>
      </form>
      <form className={classes.root}>
        <TextField
          className={classes.root}
          label="Category"
          value={category}
          onChange={handleCategoryChange}
        />
      </form>
      <form className={classes.root}>
        <TextField
          className={classes.root}
          label="Write your question"
          value={question}
          onChange={handleQuestionChange}
        />
      </form>
      <form className={classes.root}>
        <TextField
          className={classes.root}
          label="Write correct answer"
          value={answer}
          onChange={handleAnswerChange}
        />
      </form>
      <Button
        color="primary"
        style={{ marginTop: '10px' }}
        onClick={() => {
          APIService.addNewQuestion({ level, question, answer, category });
          setAnswer('');
          setQuestion('');
          setLevel('');
          setCategory('');
        }}
      >
        Add question
      </Button>
    </>
  );
}
