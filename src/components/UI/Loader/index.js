import React from 'react'
import {RefreshIndicator} from 'material-ui'
import './Loader.css'

const Loader = ( {loaderClass, size, top, left} ) => {
  return (
    <div className={loaderClass}>
      <RefreshIndicator
        size={size}
        left={left}
        top={top}
        status="loading"
        style={{
          display: 'inline-block',
          position: 'relative'
        }}
      />
    </div>
  )
}

export default Loader