import React from 'react';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      return (

        <div className="container">
        <div className="row">
          <div className="left">&nbsp;</div>
          <div className="middle">
            <button onClick={this.props.onClick} value="leaderboardToggle">
              {this.props.leaderboardShown ? "Hide" : "Show"} Rankings
            </button>
            <button onClick={this.props.onClick} value="reset">Reset</button>
          </div>
          <div className="right">&nbsp;</div>
        </div>
      </div>


      )
    }
  }