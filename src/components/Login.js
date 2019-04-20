import React from 'react'

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
      <form>
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

export default Login
