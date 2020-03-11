const initialState = []

const tweetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TWEETS': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default tweetsReducer