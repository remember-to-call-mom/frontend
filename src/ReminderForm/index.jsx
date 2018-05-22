import React from 'react';
import ReminderFormBranch from './ReminderFormBranch';

const withReminderForm = Component => class ReminderForm extends React.Component {
  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  state = {
    channel: 'push',
    title: 'Call Mom',
    min: 4,
    'min-unit': 'days',
    max: 10,
    'max-unit': 'days',
    limit: false,
  }

  handleUpdate(id) {
    return (event) => {
      this.setState({
        [id]: event.target.value,
      });
    };
  }

  render() {
    return (
      <Component
        values={this.state}
        onUpdate={this.handleUpdate}
      />
    );
  }
};

export default withReminderForm(ReminderFormBranch);
