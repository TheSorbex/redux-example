import { fork } from 'redux-saga/effects'

import {
  watchSwapi
} from './watchers'

export default function * rootSaga () {
  yield fork(watchSwapi)
}
