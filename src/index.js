import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp/'
import todos from './todos'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todosReducer from './reducers'

const store = createStore(todosReducer)
const root = document.getElementById('root')
window.store = store

ReactDOM.render((<Provider store = {store}>
                    <TodoApp todos = {todos}/>
                </Provider>)
    , root)
