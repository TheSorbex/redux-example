import React from 'react'
import { useSelector } from 'react-redux'
import useAction from '../../hooks'
import { modal } from '../../actions'

const HooksComponent = () => {
  const openModal = useAction(() => modal.openModal())

  const mainModal = useSelector(state => state.modal.mainModal.open)

  return (
    <div>
      <div>{mainModal ? 'Modal opened' : 'Modal closed'}</div>
      <button onClick={openModal}>Show Modal</button>
    </div>
  )
}

export default HooksComponent
