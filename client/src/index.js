import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

const ele = ( 
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));
