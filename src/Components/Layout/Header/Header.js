import React from 'react'
import {AppBar} from 'material-ui'

import './Header.css'

const Header = () => {
  return (
    <AppBar
      title="MyReads"
      className="AppBar"
      showMenuIconButton={false}
    />
  )
}

export default Header