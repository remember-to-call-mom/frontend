import { connect } from 'react-redux';
import { STATES } from '../constants';
import ReminderForm from './ReminderForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchAdd: payload => dispatch({
    type: STATES.ADD_REMINDER,
    payload,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderForm);
