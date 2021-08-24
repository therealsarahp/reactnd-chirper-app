import React, { Component } from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <NewTweet />
        {/*<LoadingBar />*/}
        {/*{this.props.loading === true*/}
        {/*? null*/}
        {/*: <Dashboard />}*/}
      </div>
    )
  }
}

function mapStateToProps( { authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)