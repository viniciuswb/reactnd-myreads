import React from 'react'
import {Dialog, FlatButton} from 'material-ui'

const Modal = ({modalOpen, modalToggle}) => {
  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={modalToggle}
    />
  ]

  return (
    <Dialog
      title="Dialog With Actions"
      actions={actions}
      modal={true}
      open={modalOpen}
    >
      Only actions can close this dialog.
    </Dialog>
  )
}

export default Modal