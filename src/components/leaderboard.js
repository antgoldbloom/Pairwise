import React from 'react';


export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  
    render() {

      const vals = this.props.options;
      

      return (

          <div className="leaderboard_container">
            <div className="heading">
        
              <div className="leaderboard_cell">&nbsp;</div><div className="leaderboard_cell">mu</div><div className="leaderboard_cell">sigma</div><div className="leaderboard_cell">prune</div>
            </div>
            {Object.keys(this.props.options).map(option => ( 
              <div className="row">
                <div className="leaderboard_cell">{option}</div>
                <div className="leaderboard_cell">{vals[option].mu.toFixed(1)}</div>
                <div className="leaderboard_cell">{vals[option].sigma.toFixed(1)}</div>
                <div className="leaderboard_cell"> <button className="delete" value={option} onClick={this.props.onClick}>x</button> </div>
                  
              </div>
            ))}
          </div>
        
        )
      }
    
    
  }