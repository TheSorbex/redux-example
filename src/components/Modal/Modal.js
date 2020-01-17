import React, { Component } from 'react'

import './Modal.scss'

export default class ModalComponent extends Component {
  render () {
    const { open } = this.props.mainModal
    const { closeModal } = this.props
    return (
      <>
        {open && <div className='modal'>
          <div className='modal-body'>
            <h2 className='modal-catalogue-title'>Something useful</h2>
            <div className='buttons'>
              <div className='button ok-button' onClick={closeModal}>
                <span className='button-text'>OK</span>
              </div>
            </div>
          </div>
        </div>}
      </>
    )
  }
}
