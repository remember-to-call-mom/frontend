import React from 'react';
import ReminderFormBranch from './ReminderFormBranch';

const withReminderForm = Component => class extends React.Component {
  handleUpdate() {
    this.setState({});
  }

  render() {
    return (
      <Component
        onUpdate={this.handleUpdate}
      />
    );
  }
};

export default withReminderForm(ReminderFormBranch);
