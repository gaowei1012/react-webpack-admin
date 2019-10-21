import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducers from './reducers' 

const configStore = preloadState => {
  const store = createStore(
    rootReducers,
    preloadState,
    applyMiddleware(thunk, logger)
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.preloadState(rootReducers)
    })
  }
}

export default configStore
