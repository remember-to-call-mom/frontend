import { connect } from 'react-redux';

import { STATES, ROUTES_MAPPING } from '../constants';
import NavigationBranch from './NavigationBranch';

const mapStateToProps = (state) => {
  const currentRoute = Object.values(ROUTES_MAPPING).find(route => route.url === state.navigation);

  return {
    value: currentRoute ? currentRoute.index : 0,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: (event, value) => dispatch({
    type: STATES.UPDATE_NAVIGATION,
    payload: value,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBranch);
