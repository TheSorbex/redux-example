import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useAction from '../../hooks'
import { modal, people as peopleAction } from '../../actions'

const HooksComponent = () => {
  const openModal = useAction(() => modal.openModal())

  const getSwapiPeople = useAction(() => peopleAction.getPeople())

  const mainModal = useSelector(state => state.modal.mainModal.open)
  const people = useSelector(state => state.people.people.res)

  return (
    <div>
      <div>{mainModal ? 'Modal opened' : 'Modal closed'}</div>
      <button onClick={openModal}>Show Modal</button>
      <button onClick={getSwapiPeople}>Get Swapi people</button>
      <div>
        <Link to='/'>To Home</Link>
      </div>
      {people.map((item) => <div key={item.name}>{item.name}</div>)}
    </div>
  )
}

export default HooksComponent
