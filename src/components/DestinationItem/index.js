import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachDestination} = this.props
    return (
      <li className="each-destination-card">
        <img
          src={eachDestination.imgUrl}
          className="destination-img"
          alt={eachDestination.name}
        />
        <p className="each-destination-name"> {eachDestination.name} </p>
      </li>
    )
  }
}

export default DestinationItem
