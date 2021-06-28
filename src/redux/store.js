import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import composeWithDevTools from 'redu'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store