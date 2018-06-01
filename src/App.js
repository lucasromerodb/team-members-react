import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ConditionalSection from './sections/Conditional'
import UpdateProps from './sections/UpdateProps'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: this.props.counterStart
    }
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
  }
  render() {
    return <CounterNumber number={this.state.counter} />
  }
}

Counter.defaultProps = {
  counterStart: 5
}

class CounterNumber extends Component {
  render() {
    console.log('CounterNumber render()');
    return <h3>{this.props.number}</h3>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <UpdateProps/>
        <img
          alt="Made with React"
          className='App-logo'
          src={logo}
          style={{marginTop: 50}}
          title="Made with React by Lucas Romero Di Benedetto"
          width={80}
        />
      </div>
    );
  }
}

export default App;
