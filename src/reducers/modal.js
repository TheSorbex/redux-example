import update from 'immutability-helper'

import { actions } from '../constants'

const initialState = {
  mainModal: {
    open: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return update(state, {
        mainModal: {
          open: { $set: true }
        }
      })
    case actions.CLOSE_MODAL:
      return update(state, {
        mainModal: {
          open: { $set: false }
        }
      })
    default:
      return state
  }
}
