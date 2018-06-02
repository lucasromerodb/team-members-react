import React, { Component } from 'react' // Añadir PureComponent si queremos evitar la actualización automatica del componente el recibir nuevas props
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

// usar PureComponent para evitar el shouldComponentUpdate() - no olvidar importarlo arriba
class Pictures extends Component {

  state = {
    members: PICTURES[this.props.member],
    winWidth: 0
   }

  static propTypes = {
    member: PropTypes.oneOf(PICTURES_KEY)
  }

  _updateDocumentWidth = () => {
    this.setState({ winWidth: document.body.clientWidth })
  }

  componentDidMount() {
    this._updateDocumentWidth()
    console.log('0.componentDidMount');
    window.addEventListener('resize', this._updateDocumentWidth)
  }

  componentWillReceiveProps(nextProps) {
    console.clear()
    console.log('1.componentWillReceiveProps')
    console.log(nextProps)
    this.setState({ members: PICTURES[nextProps.member]})
  }

  shouldComponentUpdate(nextProps) {
    console.log('2.shouldComponentUpdate')
    // console.log(this.props.member, nextProps.member)
    // return this.props.member !== nextProps.member
    return nextProps.member
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('3.componentWillUpdate', nextProps, nextState)
    const img = document.querySelector('img')
    console.log({ alt: img.alt })
    img.animate([{
      filter: 'blur(0px)'
    },{
      filter: 'blur(10px)'
    }], {
      duration: 300,
      easing: 'ease'
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('4.componentDidUpdate')
    console.log(prevProps, prevState)
    const img = document.querySelector('img')
    console.log({ alt: img.alt })
    img.animate([{
      filter: 'blur(10px)'
    }, {
      filter: 'blur(0px)'
    }], {
      duration: 300,
      easing: 'ease'
    })
  }

  componentWillUnmount() {
    console.log('5.componentWillUnmount')
    document.removeEventListener('resize', this._updateDocumentWidth)
  }

  render() {
    console.log('-> render')
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
          style={{marginTop: '10px'}}
        />
        <p>{this.state.winWidth}</p>
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
