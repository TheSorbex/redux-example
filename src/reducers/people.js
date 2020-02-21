import update from 'immutability-helper'

import { actions } from '../constants'

const initialState = {
  people: {
    res: [],
    error: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PEOPLE_SUCCESS:
      return update(state, {
        people: {
          res: { $set: action.payload }
        }
      })
    case actions.GET_PEOPLE_ERROR:
      return update(state, {
        people: {
          error: { $set: action.payload }
        }
      })
    default:
      return state
  }
}
