import React, { Component } from "react";
import {connect} from "react-redux";


class Dashboard extends Component {

    render(){
        return(
            <div>
                <h3 className='center'> Your TimeLine </h3>
                <ul className='dashboard-list'>
                    {this.props.tweetIds.map((id)=> (
                        <li key={id}>
                            <div>TWEET ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ tweets }) {
    return {
        tweetIds: Object.keys(tweets)
            .sort((a,b)=> tweets[b].timestamp - tweets[a].timestamp)
    }
}


export default connect(mapStateToProps)(Dashboard);
// export default connect((state)=>({
//     tweets: state.tweets,
//     users: state.users,
//     authedUser: state.authedUser
// }))(Dashboard)