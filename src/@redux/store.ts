import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { uiConfig } from './reducers/uiConfig'

const store = () => {
    return createStore(
        combineReducers({
            uiConfig,
        }),
        compose(applyMiddleware(thunk)),
    )
}

export default store
