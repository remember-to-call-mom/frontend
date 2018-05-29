import React from 'react';
import PropTypes from 'prop-types';
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles,
} from '@material-ui/core';

import RemindersIcon from '@material-ui/icons/List';
import ProfileIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: theme.shadows[5],
  },
});

const Navigation = ({ value, onChange, classes }) => (
  <BottomNavigation
    value={value}
    onChange={onChange}
    className={classes.root}
  >
    <BottomNavigationAction label="Reminders" icon={<RemindersIcon />} />
    <BottomNavigationAction label="Add" icon={<AddIcon />} />
    <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
  </BottomNavigation>
);

Navigation.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Navigation);
