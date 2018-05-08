import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme } from 'material-ui/styles'
import {
  blueGrey,
  orange,
} from 'material-ui/colors'

import withRoot from './withRoot'

const defaultTheme = {
  palette: {
    primary: {
      light: blueGrey[500],
      main: blueGrey[700],
      dark: blueGrey[900],
    },
    secondary: {
      light: orange['A100'],
      main: orange['A200'],
      dark: orange['A400'],
    },
  },
}

const AppContainer = ({ theme, children }) => {
  const BaseComponent = () => (
    <Fragment>
      {children}
    </Fragment>
  )

  const Root = withRoot(BaseComponent, {
    theme: createMuiTheme(theme),
  })

  return (
    <Root />
  )
}

AppContainer.propTypes = {
  theme: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired,
}

AppContainer.defaultProps = {
  theme: defaultTheme,
}

export default AppContainer