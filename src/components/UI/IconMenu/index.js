import React from 'react'
import Menu from 'material-ui/IconMenu'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'

const IconMenu = props => (
  <Menu
    style={{
      position: 'absolute',
      right: 0,
      bottom: '-10px'
    }}
    iconButtonElement={
      <FloatingActionButton
        mini={true}
        backgroundColor="#1e5a9f"
      >
        <ArrowDown/>
      </FloatingActionButton>
    }
    value={props.value}
    onChange={props.change}
    selectedMenuItemStyle={{color: '#1e5a9f'}}
  >
    {props.children}
  </Menu>
)

export default IconMenu