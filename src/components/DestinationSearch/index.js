import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {
    destinationName: '',
  }

  searchDestination = event => {
    const inputValue = event.target.value
    this.setState({destinationName: inputValue})
  }

  render() {
    const {destinationsList} = this.props
    const {destinationName} = this.state

    const searchResults = destinationsList.filter(eachDestination => {
      const eachDestinationNameLower = eachDestination.name.toLowerCase()
      return eachDestinationNameLower.includes(destinationName)
    })

    return (
      <div className="destination-search-bcg-container">
        <h1> Destination Search </h1>

        <div className="input-container">
          <input
            type="search"
            onChange={this.searchDestination}
            value={destinationName}
            className="user-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul className="destination-search-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              eachDestination={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
