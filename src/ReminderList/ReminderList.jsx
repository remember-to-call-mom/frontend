import React from 'react';
import PropTypes from 'prop-types';
import ReminderListBranch from './ReminderListBranch';

const withReminderList = Component => class ReminderList extends React.Component {
  static propTypes = {
    reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatchDelete: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    return () => this.props.dispatchDelete(id);
  }

  render() {
    const { reminders } = this.props;

    if (reminders.length < 1) {
      return null;
    }

    return (
      <Component
        onDelete={this.handleDelete}
        reminders={reminders}
      />
    );
  }
};

export default withReminderList(ReminderListBranch);
