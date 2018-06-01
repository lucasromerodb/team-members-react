import React, { Component } from 'react'

class LoginButton extends Component {
  render() {
    return <button onClick={this.props.action}>Login User</button>
  }
}

class ComponentB extends Component {
  render() {
    return (
      <div>
        <h4>Welcome, User</h4>
        <button onClick={this.props.action}>Log out</button>
      </div>
    )
  }
}

export default class ConditionalSection extends Component {
  constructor(){
    super()
    this.state = {
      isUserLogged: false
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(prevState) {
    this.setState(prevState => ({
      isUserLogged: !prevState.isUserLogged
    }))
  }

  render() {
    return(
      <div>
        <h4>Conditional Rendering</h4>
        {this.state.isUserLogged ? <LoginButton action={this.handleLogin}/> : <ComponentB action={this.handleLogin} />}
      </div>
    )
  }
}
