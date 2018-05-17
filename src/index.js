import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp/'
import './index.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import todos from './reducers'

const reducers = combineReducers({todos})
const store = createStore(reducers)
const root = document.getElementById('root')
window.store = store

ReactDOM.render((<Provider store = {store}>
                    <TodoApp />
                </Provider>)
    , root)
