import React from 'react';

import ReminderList from './ReminderList';
import ReminderForm from './ReminderForm';

export default [{
  private: false,
  exact: true,
  path: '/',
  render: () => (
    <ReminderList />
  ),
}, {
  private: false,
  exact: true,
  path: '/add',
  render: () => (
    <ReminderForm />
  ),
}];
