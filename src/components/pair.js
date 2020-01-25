import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Alert from '@material-ui/lab/Alert';

export default class Pair extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {

      console.log(this.props.selection_target - this.props.selection_count)

         
      if (this.props.selection_count < 6) {
        return (
          <div>
            <Alert severity="info">Choose between the options or pick the ¯\_(ツ)_/¯ if you can't decide. The more selections you make the more accurate the rankings.</Alert>   
            <div className="container">
              <div className="row">
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                 <Button value={this.props.pair[0]} onClick={this.props.onClick}>{this.props.pair[0]}</Button>
                 <Button onClick={this.props.onClick} value="nochoice">‾\_(ツ)_/‾</Button>
                 <Button  value={this.props.pair[1]} onClick={this.props.onClick}>{this.props.pair[1]}</Button>
                </ ButtonGroup>         
              </div>
              </div>
            </div>
        )
      } else if (this.props.selection_target-this.props.selection_count > 5) {
        return (

        <div>
          <Alert severity="info">It'll take {this.props.selection_target-this.props.selection_count} more pairs to get to accurate rankings. If you prune some options you will need to judge fewer pairs.</Alert> 
        <div className="container">
          <div className="row">
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
             <Button value={this.props.pair[0]} onClick={this.props.onClick}>{this.props.pair[0]}</Button>
             <Button onClick={this.props.onClick} value="nochoice">‾\_(ツ)_/‾</Button>
             <Button  value={this.props.pair[1]} onClick={this.props.onClick}>{this.props.pair[1]}</Button>
            </ ButtonGroup>         
          </div>
          </div>
        </div>
        )
      } else {
        return (

        <div>
          <Alert severity="info">You should be starting to see accurate rankings. If you're not, you might want to try pruning.</Alert> 
        <div className="container">
          <div className="row">
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
             <Button value={this.props.pair[0]} onClick={this.props.onClick}>{this.props.pair[0]}</Button>
             <Button onClick={this.props.onClick} value="nochoice">‾\_(ツ)_/‾</Button>
             <Button  value={this.props.pair[1]} onClick={this.props.onClick}>{this.props.pair[1]}</Button>
            </ ButtonGroup>         
          </div>
          </div>
        </div>
        )
} 
  
    }
  }