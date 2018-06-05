import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ROUTES_MAPPING } from '../constants';
import NavigationBranch from './NavigationBranch';

const withNavigation = Component => class Navigation extends React.Component {
  static propTypes = {
    location: PropTypes.objectOf(PropTypes.string).isRequired,
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
      this.setState({
        value: Navigation.getRouteValue(location.pathname),
      });
    });
  }

  state = {
    value: Navigation.getRouteValue(this.props.location.pathname),
  }

  handleChange(event, state) {
    const currentRoute = Object.values(ROUTES_MAPPING)
      .find(route => route.index === state);

    this.props.history.push(currentRoute.url);
  }

  render() {
    return (
      <Component
        onChange={this.handleChange}
        {...this.state}
      />
    );
  }
};

export default withRouter(withNavigation(NavigationBranch));

