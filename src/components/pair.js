import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


export default class Pair extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      return (

        <div className="container">
          <div className="row">
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
              <Button value={this.props.pair[0]} onClick={this.props.onClick}>{this.props.pair[0]}</Button>
              <Button onClick={this.props.onClick} value="nochoice">‾\_(ツ)_/‾</Button>
              <Button  value={this.props.pair[1]} onClick={this.props.onClick}>{this.props.pair[1]}</Button>
            </ ButtonGroup>         
          </div>
        </div>
      )
    }
  }