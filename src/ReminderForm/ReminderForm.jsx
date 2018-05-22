import React from 'react';
import PropTypes from 'prop-types';
import ReminderFormBranch from './ReminderFormBranch';

const withReminderForm = Component => class ReminderForm extends React.Component {
  static propTypes = {
    dispatchAdd: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  handleSave() {
    this.props.dispatchAdd({
      ...this.state,
    });
  }

  render() {
    return (
      <Component
        values={this.state}
        onUpdate={this.handleUpdate}
        onSave={this.handleSave}
      />
    );
  }
};

export default withReminderForm(ReminderFormBranch);
