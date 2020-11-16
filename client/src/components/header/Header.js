import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/add-question">
            Add Question
          </Button>
          <Button color="inherit" href="/results">
            history
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
