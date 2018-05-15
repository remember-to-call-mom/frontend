import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  TextField,
  withStyles,
  MenuItem,
  Button,
} from 'material-ui';
import classNames from 'classnames';

import {
  CHANNELS,
  INPUT_UNITS,
} from '../constants';

const styles = theme => ({
  textField: {
    marginLeft: 1 * theme.spacing.unit,
  },

  textFieldShort: {
    width: 4 * theme.spacing.unit,
  },

  inline: {
    display: 'inline',
  },

  inlineBlock: {
    display: 'inline-block',
  },
});

const ReminderFormBranch = ({ classes }) => {
  const textFieldClasses = classNames(
    classes.textField,
    classes.inlineBlock,
  );

  const textFieldShortClasses = classNames(
    classes.textField,
    classes.textFieldShort,
    classes.inlineBlock,
  );

  return (
    <Fragment>
      <Typography variant="body1" className={classes.inline}>
        Remind me with
      </Typography>

      <TextField
        id="channel"
        select
        value="push"
        className={textFieldClasses}
        margin="normal"
      >
        {CHANNELS.map(unit => (
          <MenuItem
            key={`input-${unit}`}
            value={unit}
          >
            { unit }
          </MenuItem>
        ))}
      </TextField>

      <Typography variant="body1" className={classes.inline}>
        to
      </Typography>

      <TextField
        id="title"
        value="Call Mom"
        className={textFieldClasses}
        margin="normal"
      />

      <Typography variant="body1" className={classes.inline}>
        at most every
      </Typography>

      <TextField
        id="min"
        type="number"
        value={4}
        className={textFieldShortClasses}
        margin="normal"
      />

      <TextField
        id="min-unit"
        select
        value="days"
        className={textFieldClasses}
        margin="normal"
      >
        {INPUT_UNITS.map(unit => (
          <MenuItem
            key={`input-${unit}`}
            value={unit}
          >
            { unit }
          </MenuItem>
        ))}
      </TextField>

      <Typography variant="body1" className={classes.inline}>
        and at least every
      </Typography>

      <TextField
        id="max"
        type="number"
        value={10}
        className={textFieldShortClasses}
        margin="normal"
      />

      <TextField
        id="max-unit"
        select
        value="days"
        className={textFieldClasses}
        margin="normal"
      >
        {INPUT_UNITS.map(unit => (
          <MenuItem
            key={`input-${unit}`}
            value={unit}
          >
            { unit }
          </MenuItem>
        ))}
      </TextField>

      <Typography variant="body1" className={classes.inline}>
        .
      </Typography>

      <Button variant="raised" color="secondary">
        Add reminder
      </Button>
    </Fragment>
  );
};

ReminderFormBranch.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ReminderFormBranch);
