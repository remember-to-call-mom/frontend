import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  TextField,
  withStyles,
  MenuItem,
  Button,
} from '@material-ui/core';
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

const ReminderFormBranch = ({
  values,
  onUpdate,
  onSave,
  classes,
}) => {
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
        value={values.channel}
        className={textFieldClasses}
        margin="normal"
        onChange={onUpdate('channel')}
      >
        {Object.values(CHANNELS).map(unit => (
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
        value={values.title}
        className={textFieldClasses}
        margin="normal"
        onChange={onUpdate('title')}
      />

      <Typography variant="body1" className={classes.inline}>
        at most every
      </Typography>

      <TextField
        id="min"
        type="number"
        value={values.min}
        className={textFieldShortClasses}
        margin="normal"
        onChange={onUpdate('min')}
      />

      <TextField
        id="min-unit"
        select
        value={values['min-unit']}
        className={textFieldClasses}
        margin="normal"
        onChange={onUpdate('min-unit')}
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
        value={values.max}
        className={textFieldShortClasses}
        margin="normal"
        onChange={onUpdate('max')}
      />

      <TextField
        id="max-unit"
        select
        value={values['max-unit']}
        className={textFieldClasses}
        margin="normal"
        onChange={onUpdate('max-unit')}
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

      <Button variant="raised" color="secondary" onClick={onSave}>
        Add reminder
      </Button>
    </Fragment>
  );
};

ReminderFormBranch.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ReminderFormBranch);
