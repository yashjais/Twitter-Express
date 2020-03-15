const initialState = []

const newTweetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NEWTWEET' : {
            return [...state, action.payload]
        }
        default: {
            return state
        }
    }
}

export default newTweetReducer