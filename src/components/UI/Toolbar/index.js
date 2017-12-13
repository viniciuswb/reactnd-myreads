import React from 'react'
import {
  Toolbar as Bar,
  ToolbarGroup,
  ToolbarTitle
} from 'material-ui/Toolbar'

const Toolbar = ({text}) => (
  <Bar>
    <ToolbarGroup>
      <ToolbarTitle text={text}/>
    </ToolbarGroup>
  </Bar>
)

export default Toolbar