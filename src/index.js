import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import allReducers from './reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));

let store = configureStore({
  reducer: allReducers
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

