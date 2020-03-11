import {createStore, combineReducers, applyMiddleware} from 'redux'
import tweetsReducers from '../reducers/tweets' 
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        tweets: tweetsReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore