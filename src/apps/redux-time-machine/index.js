import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import css from '../../styles/index.styl'

import App from '../redux/containers/App'
import TimeMachine from './components/TimeMachine'
import store from '../redux/store/store'

render(
  <Provider store={ store }>
    <div>
      <TimeMachine store={ store } />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
