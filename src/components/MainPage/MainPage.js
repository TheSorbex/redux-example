import React, { Component } from 'react'

export default class MainPage extends Component {
  render () {
    const { openModal, people } = this.props
    return (
      <div>
        <button
          onClick={openModal}
        >
        Show Modal
        </button>
        {people.map((item) => <div key={item.name}>{item.name}</div>)}
      </div>
    )
  }
}
