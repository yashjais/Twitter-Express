import axios from '../config/axios'

export const setTweets = (twts) => {
    return {
        type: 'SET_TWEETS', payload: twts
    }
}

export const getTweets = (query) => {
    return dispatch => {
        // axios.get(`/tweets?key=${query}`)
        //     .then(response => {
        //         console.log(response.data)
        //     })
        //     .catch(err => alert(err))
        axios.post('/tweets', {query})
            .then(response => {
                const tweets = response.data
                dispatch(setTweets(tweets))
            })
            .catch(err => alert(err))
    }
}