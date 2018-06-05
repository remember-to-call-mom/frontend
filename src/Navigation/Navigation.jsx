import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ROUTES_MAPPING } from '../constants';
import NavigationBranch from './NavigationBranch';

const withNavigation = Component =>
  class Navigation extends React.Component {
    static propTypes = {
      route: PropTypes.string.isRequired,
      dispatchRoute: PropTypes.func.isRequired,
      history: PropTypes.objectOf(PropTypes.any).isRequired,
    }

    static getRouteValue(url) {
      const currentRoute = Object.values(ROUTES_MAPPING)
        .find(route => route.url === url);

      return currentRoute.index;
    }

    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);

      this.props.history.listen((location) => {
        this.props.dispatchRoute(location.pathname);
      });
    }

    handleChange(event, state) {
      const currentRoute = Object.values(ROUTES_MAPPING)
        .find(route => route.index === state);

      this.props.history.push(currentRoute.url);
    }

    render() {
      return (
        <Component
          value={Navigation.getRouteValue(this.props.route)}
          onChange={this.handleChange}
        />
      );
    }
  };


export default withRouter(withNavigation(NavigationBranch));
