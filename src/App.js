import React, { Component } from 'react';
import { Typography, TextField, withStyles, MenuItem, Button } from 'material-ui';
import classNames from "classnames";

import AppContainer from './AppContainer';

const styles = (theme) => ({
  root: {
    margin: 1 * theme.spacing.unit,
  },

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

const inputUnits = [
  'hours',
  'days',
  'weeks',
  'months',
];

const channels = [
  'push',
  'email',
  'webhook',
]

class App extends Component {
  render() {
    const { classes } = this.props;

    const textFieldClasses = classNames(
      classes.textField,
      classes.inlineBlock
    );
    const textFieldShortClasses = classNames(
      classes.textField,
      classes.textFieldShort,
      classes.inlineBlock
    );

    return (
      <AppContainer>
        <div className={classes.root}>
          <Typography variant="display2">
            Remember To Call Mom
          </Typography>

          <Typography variant="body1" className={ classes.inline }>
            Remind me with
          </Typography>

          <TextField
            id="channel"
            select
            value="push"
            className={ textFieldClasses }
            margin="normal"
          >
            {channels.map(unit => (
              <MenuItem
                key={`input-${unit}`}
                value={ unit }
              >
                { unit }
              </MenuItem>
            ))}
          </TextField>

          <Typography variant="body1" className={ classes.inline }>
            to
          </Typography>

          <TextField
            id="title"
            value="Call Mom"
            className={ textFieldClasses }
            margin="normal"
          />

          <Typography variant="body1" className={ classes.inline }>
            at most every
          </Typography>

          <TextField
            id="min"
            type="number"
            value={ 4 }
            className={ textFieldShortClasses }
            margin="normal"
          />

          <TextField
            id="min-unit"
            select
            value="days"
            className={ textFieldClasses }
            margin="normal"
          >
            {inputUnits.map(unit => (
              <MenuItem
                key={`input-${unit}`}
                value={ unit }
              >
                { unit }
              </MenuItem>
            ))}
          </TextField>

          <Typography variant="body1" className={ classes.inline }>
            and at least every
          </Typography>

          <TextField
            id="max"
            type="number"
            value={ 10 }
            className={ textFieldShortClasses }
            margin="normal"
          />

          <TextField
            id="max-unit"
            select
            value="days"
            className={ textFieldClasses }
            margin="normal"
          >
            {inputUnits.map(unit => (
              <MenuItem
                key={`input-${unit}`}
                value={ unit }
              >
                { unit }
              </MenuItem>
            ))}
          </TextField>

          <Typography variant="body1" className={ classes.inline }>
            .
          </Typography>

          <Button variant="raised" color="secondary">
            Add reminder
          </Button>
        </div>
      </AppContainer>
    );
  }
}

export default withStyles(styles)(App);