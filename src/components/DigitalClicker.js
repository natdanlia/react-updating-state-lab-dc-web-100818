// Code DigitalClicker Component Here
import React from 'react'
import PropTypes from 'prop-types'

class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  increament = () => {
    let newVal = this.state.timesClicked + 1
    this.setState({
      timesClicked: newVal
    })
  }

  render () {
    return (
      <button onClick = {this.increament} >{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
