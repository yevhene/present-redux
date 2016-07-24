import { SET_SEARCH } from '../actions/search'

export default function search(state = [], action) {
  switch (action.type) {
  case SET_SEARCH:
    return action.search
  default:
    return state
  }
}
