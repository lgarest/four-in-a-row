import React, { Component } from 'react';
import './Rules.css';
import { Link } from 'react-router-dom';

class Rules extends Component {
  state = {}

  render() {
    return(
      <div className='instructions-container'>
        <h2>INSTRUCTIONS</h2>
        <p>Click on a column to drop your piece.</p>
        <p>The goal is to connect four pieces vertically, horizontally or diagonally before your rival.</p>
        <p>Make four in a row to win!</p>
        <img src={require('./rules.gif')} alt="animated rules" />
        <h2>PLAYERS</h2>
        <p>You can play against a friend in the same Pc or try your luck against the computer, up to you!</p>
        <div className='players-icons-container'>
          <Link to='/twoPlayers'>
            <i className="fas fa-user"></i>
            <i className="fas fa-user"></i>
          </Link>
          <Link to='/singlePlayer'>
            <i className="fas fa-desktop"></i>
            <i className="fas fa-user"></i>
          </Link>
        </div>
     </div>
    )
  }
}

export default Rules;