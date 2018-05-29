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
import Navigation from './Navigation';

const styles = theme => ({
  root: {
    margin: 2 * theme.spacing.unit,
  },
  addButton: {
    position: 'fixed',
    right: 2 * theme.spacing.unit,
    bottom: 2 * theme.spacing.unit,
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

    <Navigation value={0} />

  </AppContainer>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
