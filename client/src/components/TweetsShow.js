import React from 'react' 
import {connect} from 'react-redux'

function TweetsShow(props) {
    return (
        <div>
        <h3> New Feed </h3>
        <br />
        <button onClick={() => window.location.href="/"} >Back to Main Page</button>
        <br />
        <div className="card">
                {
                    props.newTweets.map((tweet, value) => {
                        return (
                            <div key={tweet.id} className="card-body text-light bg-dark" style={{height: '220px',margin: '15px', backgroundColor: '#000000'}}>
                                <h4 className="float-left"> <img style={{borderRadius: '50%'}} src={tweet.user.profile_image_url} /> {tweet.user.name} {`@${tweet.user.screen_name}`}</h4> <br /> <br /> <br />
                                <h5 className="card-title">{tweet.text}</h5>
                            </div>
                        )
                    })
                }    
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        newTweets: state.newTweets
    }
}

export default connect(mapStateToProps)(TweetsShow)