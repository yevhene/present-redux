import '../../styles/index.less'
import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import pokemons from '../../data/pokemons.json'

render(<App pokemons={ pokemons } />, document.getElementById('root'))
