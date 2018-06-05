import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Button, withStyles } from '@material-ui/core';
import Icon from '@material-ui/icons/SentimentDissatisfied';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    textAlign: 'center',
    transform: 'translateY(-50%)',
  },
  icon: {
    fontSize: '6rem',
    marginBottom: '0.5rem',
    marginTop: '-1rem',
    color: theme.palette.grey[600],
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    marginTop: '1rem',
  },
});

const ReminderListEmpty = ({ classes }) => (
  <div className={classes.root}>
    <div>
      <Icon className={classes.icon} />

      <Typography variant="display1">So sad</Typography>
      <Typography variant="body1">You don’t have any reminders yet.</Typography>

      <Link to="/add" className={classes.link}>
        <Button variant="raised" color="secondary" className={classes.button}>
          Add a new reminder now
        </Button>
      </Link>
    </div>
  </div>
);

ReminderListEmpty.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ReminderListEmpty);
