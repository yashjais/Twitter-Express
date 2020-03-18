import React, { useState } from 'react'
import {connect} from 'react-redux'
import {getTweets} from '../actions/tweets'
import {setNewTweets} from '../actions/tweets'
import io from "socket.io-client";
import { Link } from 'react-router-dom'

// const socket = io('https://yash-twitterr.herokuapp.com'); // for prod
const socket = io('http://localhost:3010/'); // for dev



function TweetsPage(props) {
    const [query, setQuery] = useState('');
    const [skip, setSkip] = useState(1)
    console.log(props)
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        socket.on('tweet', function(data){
            console.log(data)
            props.dispatch(setNewTweets(data))
        })
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

    // const handleClick = () => {
        
    // }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="query"></label>
                <input type="text" id="query" placeholder="Search Twitter" className="rounded-pill" style={{position: 'fixed'}} name="query" value={query} onChange={handleChange}  /> 
                <button className="float-right btn btn-primary" type="button" > <Link style={{color: '#f0f8ff'}}  to="/newTweets"> Notifications </Link> <span className="badge badge-light">{props.newTweets.length}</span>
            </button>
            </form>
            
            <br />

            <div className="card">
                {
                    props.tweets.map((tweet, value) => {
                        if(value <= skip * 10){
                            return (
                                <div key={tweet.id} className="card-body text-light bg-dark" style={{height: '220px',margin: '15px', backgroundColor: '#000000'}}>
                                    <h4 className="float-left"> <img style={{borderRadius: '50%'}} src={tweet.user.profile_image_url} /> {tweet.user.name} {`@${tweet.user.screen_name}`}</h4> <br /> <br /> <br />
                                    <h5 className="card-title">{tweet.text}</h5>
                                </div>
                            )
                        }
                    })
                }    
            </div>

            <br />
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
        tweets: state.tweets,
        newTweets: state.newTweets
    }
    
}

export default connect(mapStateToProps)(TweetsPage)