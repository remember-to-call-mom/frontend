import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Typography,
  withStyles,
  Toolbar,
} from '@material-ui/core';

import AppContainer from './AppContainer';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';

const styles = theme => ({
  root: {
    margin: 2 * theme.spacing.unit,
  },
});

const App = ({ classes }) => (
  <AppContainer>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Remember To Call Mom
        </Typography>
      </Toolbar>
    </AppBar>

    <div className={classes.root}>
      <ReminderForm />
      <ReminderList />
    </div>
  </AppContainer>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
