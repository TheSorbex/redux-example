import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'

import store from './store'

import Modal from './components/Modal'
import MainPage from './components/MainPage'
import UserPage from './components/UserPage'
import HooksComponent from './components/HooksComponent'

import './App.css'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Modal />

        <Router history={history}>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/user' component={UserPage} />
            <Route exact path='/hooks' component={HooksComponent} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
