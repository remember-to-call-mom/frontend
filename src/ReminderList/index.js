import { connect } from 'react-redux';

import { STATES } from '../constants';
import ReminderList from './ReminderList';

const mapStateToProps = state => ({
  reminders: state,
});

const mapDispatchToProps = dispatch => ({
  dispatchDelete: id => dispatch({
    type: STATES.DELETE_REMINDER,
    payload: id,
  }),

});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);

