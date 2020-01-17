import React, { Component } from 'react'

export default class UserPage extends Component {
  render () {
    const { openModal } = this.props
    return (
      <div>
        <button
          onClick={openModal}
        >
        Show Modal
        </button>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <input
            name='username'
            type='text'
            placeholder='username'
            style={{
              height: '30px',
              width: '300px'
            }}
          />
          <input
            name='email'
            type='text'
            placeholder='email'
            style={{
              height: '30px',
              width: '300px'
            }}
          />
          <button>Submit</button>
        </div>
      </div>
    )
  }
}
