import React from 'react'
import { Provider } from 'react-redux'
import Router from './router'

const CreateApp = (store, history) => {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  )
}

export default CreateApp
