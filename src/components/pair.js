import React from 'react';

export default class Pair extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      return (

        <div className="container">
          <div className="row">
            
              <div className="left"><button className="choice" value={this.props.pair[0]} onClick={this.props.onClick}>{this.props.pair[0]}</button></div>
              <div className="middle">&nbsp;</div>
              <div className="right"><button className="choice" value={this.props.pair[1]} onClick={this.props.onClick}>{this.props.pair[1]}</button></div>
          </div>
          <div className="row">
            <div className="left">&nbsp;</div>
            <div className="middle"><button onClick={this.props.onClick} value="nochoice">‾\_(ツ)_/‾</button></div>
            <div className="right">&nbsp;</div>
          </div>
        </div>
      )
    }
  }