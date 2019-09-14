import React from 'react'
import PropTypes from "prop-types";
import './ModelDetails.css'

export default class ModelDetails extends React.Component{
  static propTypes={
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired
    }

  render()
  {
    return(
        <div id="container"> 
            <ul>
                <li key={this.props.name}>Name : {this.props.name}</li>
                <li key={this.props.manufacturer}>Manufacturer : {this.props.manufacturer}</li>
                <li key={this.props.year}>Year : {this.props.year}</li>
                <li key={this.props.origin}>Origin: {this.props.origin}</li>
            </ul>
        </div>
    )
   
  }
    
}
