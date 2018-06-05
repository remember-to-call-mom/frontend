import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Typography,
  withStyles,
  Toolbar,
} from '@material-ui/core';
import Walls from 'walls';

import AppContainer from './AppContainer';
import Navigation from './Navigation';
import Routes from './Routes';

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
      <Walls
        routes={Routes}
        isAuthorized
      >
        <Navigation />
      </Walls>
    </div>

  </AppContainer>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
