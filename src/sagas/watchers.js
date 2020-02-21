import { takeLatest, all } from 'redux-saga/effects'

import swapiSaga from './swapiSaga'

import { actions } from '../constants'

function * watchSwapi () {
  yield all([
    takeLatest(actions.GET_PEOPLE, swapiSaga.getSwapiPeople)
  ])
}

export {
  watchSwapi
}
