import React from 'react';
import PropTypes from 'prop-types';
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles,
} from '@material-ui/core';
import { ROUTES_MAPPING } from '../constants';

const styles = theme => ({
  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: theme.shadows[5],
  },
});

const NavigationBranch = ({ value, onChange, classes }) => (
  <BottomNavigation
    value={value}
    onChange={onChange}
    className={classes.root}
  >
    {Object.values(ROUTES_MAPPING).map(route => (
      <BottomNavigationAction
        key={route.index}
        label={route.label}
        icon={<route.iconComponent />}
      />
    ))}
  </BottomNavigation>
);

NavigationBranch.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(NavigationBranch);
