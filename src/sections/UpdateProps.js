import React, { Component } from 'react'
import PropTypes from 'prop-types'
import brianPic from '../img/brian.png'
import damienPic from '../img/damien.png'
import scottPic from '../img/scott.png'
import palaPic from '../img/pala.png'
import turbioPic from '../img/turbio.png'

const PICTURES = {
  pala: palaPic,
  brian: brianPic,
  turbio: turbioPic,
  scott: scottPic,
  damien: damienPic
}

const PICTURES_KEY = Object.keys(PICTURES)

class Pictures extends Component {

  state = { members: PICTURES[this.props.member] }

  static propTypes = {
    member: PropTypes.oneOf(PICTURES_KEY)
  }

  componentWillReceiveProps(nextProps) {
    console.log('mponentWillReceiveProps');
    console.log(nextProps);
    this.setState({ members: PICTURES[nextProps.member]})
  }


  render() {
    console.log('-> render');
    return (
      <div>
        <h2
          className='title is-1'
          style={{marginTop: 30}}
        >
          Él es <span style={{textTransform: 'capitalize'}}>{this.props.member}</span> </h2>
        <img
          alt={this.props.member}
          src={this.state.members}
          width='300'
          style={{marginTop: '30px'}}
        />
      </div>
    )
  }

}

export default class UpdateProps extends Component {
  state = { members: 'brian'}

  _renderButtons = member => {
    return (
      <button
        className='button'
        disabled={member === this.state.members}
        key={member}
        onClick={() => this.setState({ members: member })}
        style={{textTransform: 'capitalize', marginLeft: 2, marginRight: 2}}
        >
        {member}
      </button>
    )
  }

  render() {
    return (
      <div style={{marginTop: 20}}>
        {PICTURES_KEY.map(this._renderButtons)}
        <Pictures member={this.state.members}/>
      </div>
    )
  }
}
