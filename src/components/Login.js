import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
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
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
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

const fetchLogin = (e, user) => {
  e.preventDefault()
  return fetch("http://localhost:3000/api/v1/login", {
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
    handleSubmit: (e, user) => { fetchLogin(e, user).then((userObj) => {
      if(!!userObj.message) {
        alert(userObj.message)
      } else {
        localStorage.setItem('token', userObj.jwt)
        dispatch({type: "LOGIN", payload: userObj})
      }
    })}
  })
}

// handleLogin = (e, user) => {
//     e.preventDefault()
//     fetch("http://localhost:3000/api/v1/login", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//     .then(res => res.json())
//     .then(userObj => {
//       if(!!userObj.message) {
//         alert(userObj.message)
//       } else {
//         localStorage.setItem('token', userObj.jwt)
//         this.setState({
//           user: userObj.user,
//           gifts: userObj.gifts
//         }, () => this.props.history.push(`/${this.state.user.first_name}/gifts`))
//       }
//     })
//   }

export default connect(null, mapDispatchToProps)(Login)
