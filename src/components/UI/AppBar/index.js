import React from 'react'
import Bar from 'material-ui/AppBar'

import './AppBar.css'

const AppBar = ({location}) => {
  let appName = 'MyReads'
  if (location.pathname === '/search') {
    appName = 'MyReads Search'
  }
  return (
    <Bar
      title={appName}
      className="AppBar"
      showMenuIconButton={false}
    />
  )
}

export default AppBar