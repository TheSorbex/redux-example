import React, { Component } from 'react'

export default class MainPage extends Component {
  render () {
    const { openModal } = this.props
    return (
      <div>
        <button
          onClick={openModal}
        >
        Show Modal
        </button>
      </div>
    )
  }
}
