import React, { Component } from 'react';
import {
  Typography,
  withStyles,
} from 'material-ui';

import AppContainer from './AppContainer';
import ReminderForm from './ReminderForm';

const styles = (theme) => ({
  root: {
    margin: 1 * theme.spacing.unit,
  },
});

class App extends Component {
  render() {
    return (
      <AppContainer>
        <div className={ this.props.classes.root }>
          <Typography variant="display2">
            Remember To Call Mom
          </Typography>

          <ReminderForm />
        </div>
      </AppContainer>
    );
  }
}

export default withStyles(styles)(App);