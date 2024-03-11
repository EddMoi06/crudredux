import {configureStore, applyMiddleware, compose} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import reducers from './reducers'

const store = configureStore(
    reducers,
    compose(applyMiddleware(thunk),

        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                 window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)


export default store