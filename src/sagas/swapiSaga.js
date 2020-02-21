import { call, put } from 'redux-saga/effects'

import services from '../services'

import { actions } from '../constants'

function * getSwapiPeople () {
  try {
    const response = yield call(services.people.getPeople)
    yield put({ type: actions.GET_PEOPLE_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: actions.GET_PEOPLE_ERROR, payload: error })
  }
}

export default {
  getSwapiPeople
}
