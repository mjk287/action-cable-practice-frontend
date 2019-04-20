import React from 'react'
import { connect } from 'react-redux'

class Signup extends React.Component{
  state = {
    username: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={(e) => this.props.handleSignup(e, this.state)}>
        <label>
        Username:
        <input type='text' name='username' value={this.state.username} onChange={this.changeHandler}/>
        </label>
        <label>
        Password:
        <input type='text' name='password' value={this.state.password} onChange={this.changeHandler}/>
        </label>
        <input type='submit' value='Submit Me!'/>
      </form>
    )
  }
}

const createUserFetch = (e, user) => {
  e.preventDefault()
  return fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())

}

const mapDispatchToProps = (dispatch) => {
  return ({
    handleSignup: (e, user) => { createUserFetch(e, user).then(userObj => {
      localStorage.setItem('token', userObj.jwt)
      dispatch({type: 'USER_SIGNUP', payload: userObj})
    })}
  })
}

export default connect(null, mapDispatchToProps)(Signup)
