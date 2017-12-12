import React from 'react'
import {AppBar} from 'material-ui'

import './Header.css'

const Header = ({location}) => {
  let appName = 'MyReads'
  if (location.pathname === '/search') {
    appName = 'MyReads Search'
  }
  return (
    <AppBar
      title={appName}
      className="AppBar"
      showMenuIconButton={false}
    />
  )
}

export default Header