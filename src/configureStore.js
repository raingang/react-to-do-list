import todos from './reducers'
import { loadState, saveState } from './storage'
import { createStore, combineReducers } from 'redux'

export default function configureStore() {

    const reducers = combineReducers({todos})
    const persistedState = loadState()
    const store = createStore(reducers, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    store.subscribe(() => {
        saveState({todos: store.getState().todos})
    })

    return store
}