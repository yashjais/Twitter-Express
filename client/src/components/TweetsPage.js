import React, { useState } from 'react'
import {connect} from 'react-redux'
import {getTweets} from '../actions/tweets'
import io from "socket.io-client";

function TweetsPage(props) {
    const [query, setQuery] = useState('');
    const [skip, setSkip] = useState(1)
    console.log(props)
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
        props.dispatch(getTweets(query))
        setQuery('')
    }
    // socket = io('localhost:3010');

    //     socket.on('RECEIVE_MESSAGE', function(data){
    //         addTweet(data);
    //     });
        
    //     const addTweet = data => {
    //         console.log(data);
    //     };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="query">Search</label>
                <input type="text" id="query" name="query" value={query} onChange={handleChange} />
                <input type="submit" />
            </form>
            {
                props.tweets.map((tweet, value) => {
                    if(value <= skip * 10){
                        return (
                            <li key={tweet.id}>{tweet.text}</li>
                        )
                    }
                })
            }    
            <button onClick={() => setSkip(skip + 1)}>load more</button>
        </div>
    )
}

// class TweetsPage extends React.Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             query: '',
//             tweets: [],
//             skip: 1
//         }
//         console.log(this.props, 'in coonst bu porps')
//         console.log(this.state, 'in const')
//     }
//     handleChange = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         const query = this.state.query
//         this.props.dispatch(getTweets(query))
//         this.setState({query: ''})
//     }
    
//     render() {
//         console.log(this.state.tweets, 'in render')
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                    <label htmlFor="query">query</label>
//                    <input type="text" id="query" name="query" value={this.state.query} onChange={this.handleChange} />
//                    <input type="submit" />
//                 </form>
//                 {
//                     this.state.tweets.map((tweet, value) => {
//                         if(value <= this.state.skip * 10){
//                             return (
//                                 <li key={tweet.id}>{tweet.text}</li>
//                             )
//                         }
//                     })
//                 }
                
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets
    }
    
}

export default connect(mapStateToProps)(TweetsPage)