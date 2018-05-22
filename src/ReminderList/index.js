import { connect } from 'react-redux';

import { STATES } from '../constants';
import ReminderList from './ReminderList';

const mapStateToProps = state => ({
  reminders: state,
});

const mapDispatchToProps = dispatch => ({
  dispatchDelete: payload => dispatch({ type: STATES.DELETE_REMINDER, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);

