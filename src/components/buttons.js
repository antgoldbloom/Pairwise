import React from 'react';
import Button from '@material-ui/core/Button';



export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  



    render() {
      const style = {
        minWidth: 150
     }
      return (

        <div className="container">
        <div className="row">
          <div className="left">&nbsp;</div>
          <div className="middle">
            <Button style={style} onClick={this.props.onClick} value="leaderboardToggle">
              {this.props.leaderboardShown ? "Hide" : "Show"} Rankings
            </Button>
            <Button style={style} onClick={this.props.onClick} value="reset">Reset</Button>
          </div>
          <div className="right">&nbsp;</div>
        </div>
      </div>


      )
    }
  }