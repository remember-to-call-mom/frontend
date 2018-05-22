import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  withStyles,
} from '@material-ui/core';

import AppContainer from './AppContainer';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';

const styles = theme => ({
  root: {
    margin: 1 * theme.spacing.unit,
  },
});

const App = ({ classes }) => (
  <AppContainer>
    <div className={classes.root}>
      <Typography variant="display2">
        Remember To Call Mom
      </Typography>

      <ReminderForm />
      <ReminderList />
    </div>
  </AppContainer>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
