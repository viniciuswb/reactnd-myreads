import React from 'react'
import FlatBtn from 'material-ui/FlatButton'

const FlatButton = ({icon, label, click}) => (
  <FlatBtn
    label={label}
    style={{color: 'rgba(30, 90, 159, 1)'}}
    backgroundColor="rgba(255,255,255,0.7)"
    hoverColor="rgba(255,255,255,0.9)"
    icon={icon}
    onClick={() => click()}
  />
)

export default FlatButton