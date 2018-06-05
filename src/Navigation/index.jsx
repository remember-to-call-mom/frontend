import { connect } from 'react-redux';
import { STATES } from '../constants';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  route: state.route,
});

const mapDispatchToProps = dispatch => ({
  dispatchRoute: payload => dispatch({
    type: STATES.UPDATE_NAVIGATION,
    payload,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
