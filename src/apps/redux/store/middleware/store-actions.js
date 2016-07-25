const key = '__redux_actions';

export const storeActions = store => next => action => {
  restoreActions().push(action)

  return next(action)
}

export const resetActions = () => {
  return window[key] = []
}

export const restoreActions = () => {
  if (!window[key]) {
    window[key] = []
  }

  return window[key]
}
