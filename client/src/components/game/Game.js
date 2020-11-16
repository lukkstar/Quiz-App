import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import APIService from '../../service/APIService';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

export default function SimpleContainer() {
  const classes = useStyles();
  const [answer, setAnswer] = React.useState('');
  const [current, setCurrent] = React.useState(0);

  const [level, setLevel] = React.useState('');
  const handleChange = event => {
    setLevel(event.target.value);
  };
  const [point, setPoint] = React.useState(0);
  const [questions, setquestions] = React.useState();
  const [allAnswers, setAllAnswers] = React.useState([]);
  const [complete, setComplete] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [chosenCategory, setChosenCategory] = React.useState('');

  const handleAnswerChange = event => {
    setAnswer(event.target.value);
  };
  const handleChooseCategoryChange = event => {
    setChosenCategory(event.target.value);
  };
  useEffect(() => {
    APIService.getCategories().then(res => {
      setCategories(res.data);
    }, []);
  });

  const onStart = () => {
    setCurrent(0);
    setComplete(false);
    setAnswer('');
    setPoint(0);
    APIService.getQuestion(level, chosenCategory).then(res => {
      setquestions(res.data);
    });
  };

  const onAnswer = () => {
    setCurrent(current + 1);
    setAnswer('');
    if (answer.toLowerCase() === questions[current].answer.toLowerCase()) {
      setPoint(point + 2);
    }

    setAllAnswers([...allAnswers, answer]);
  };
  const onComplete = () => {
    const all = [...allAnswers, answer];
    const result = point + 2;
    if (answer.toLowerCase() === questions[current].answer.toLowerCase()) {
      setPoint(result);
    }
    APIService.saveResult(result, level, chosenCategory).then(() => {
      setComplete(true);
      setAllAnswers(all);
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: '#fcba03',
          height: '85vh',
          marginTop: '15px',
          paddingBottom: '15px',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Lets Play</h2>
        {complete && <h2>Score: {point}</h2>}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={chosenCategory}
            onChange={handleChooseCategoryChange}
          >
            {categories &&
              categories.map((cat, index) => {
                return (
                  <MenuItem key={index} value={cat}>
                    {cat}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select value={level} onChange={handleChange}>
            <MenuItem value={'easy'}>Easy</MenuItem>
            <MenuItem value={'normal'}>Normal</MenuItem>
            <MenuItem value={'hard'}>Hard</MenuItem>
          </Select>
        </FormControl>
        <Button
          disabled={level === ''}
          style={{ background: 'white' }}
          onClick={onStart}
        >
          Play
        </Button>
        <div>
          {questions && questions.length > 0 && (
            <Paper>
              <p>{questions[current].question}</p>
              <TextField
                label="Write answer"
                value={answer}
                fullWidth
                onChange={handleAnswerChange}
              />
              {current !== questions.length - 1 ? (
                <Button onClick={onAnswer}>Submit</Button>
              ) : (
                <Button onClick={onComplete}>Finish</Button>
              )}
            </Paper>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
}
