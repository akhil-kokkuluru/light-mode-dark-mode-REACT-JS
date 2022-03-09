import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {colorName: 'containerWhite', buttonName: 'Light Mode'}

  colorChange = () => {
    const {buttonName} = this.state
    if (buttonName === 'Light Mode') {
      this.setState(v => ({
        colorName: 'containerBlack',
        buttonName: 'Dark Mode',
      }))
    } else {
      this.setState(v => ({
        colorName: 'containerWhite',
        buttonName: 'Light Mode',
      }))
    }
  }

  render() {
    const {colorName, buttonName} = this.state
    return (
      <div className={colorName}>
        <h1 className="heading">Click To Change Mode</h1>
        <button type="button" className="button" onClick={this.colorChange}>
          {buttonName}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
