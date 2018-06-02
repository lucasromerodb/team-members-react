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
  state = { componentAvailable: true }

  _createMountUnmountButton(text, boolean) {
    return (
      <button
        className='button'
        onClick={() => this.setState({ componentAvailable: boolean })}
        style={{marginTop: 30}}
      >
        {text}
      </button>
    )
  }

  render() {
    return (
      <div className="App">
        { this.state.componentAvailable && <UpdateProps/>}
        <div>
          {this.state.componentAvailable && this._createMountUnmountButton('Desmontar Componente', false)}
          {!this.state.componentAvailable && this._createMountUnmountButton('Montar Componente', true)}
        </div>
        <img
          alt="Made with React"
          className='App-logo'
          src={logo}
          style={{marginTop: 20}}
          title="Made with React by Lucas Romero Di Benedetto"
          width={80}
        />
      </div>
    );
  }
}

export default App;
