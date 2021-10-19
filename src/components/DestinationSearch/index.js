import DestinationItem from './components/DestinationItem'

import './index.css'

import {Component} from 'react'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="destination-search-bcg-container">
        <h1> Destination Search</h1>
        <input type="search" />
        <div className="destination-search-container">
          <DestinationItem />
        </div>
      </div>
    )
  }
}

export default DestinationSearch
