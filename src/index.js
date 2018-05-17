import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp/'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { BrowserRouter, Route } from 'react-router-dom'

const store = configureStore()
const root = document.getElementById('root')

window.store = store //dev

const Root = ({store}) => (<Provider store = {store}>
                                <BrowserRouter>
                                    <Route path = '/' component = {TodoApp} />
                                </BrowserRouter>
                            </Provider>)

ReactDOM.render(<Root store = {store} />, root)
