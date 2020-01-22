import React from 'react';


export default class OptionForm extends React.Component {
    constructor(props) {
        super(props);
        
    }



    render() {

            return (
                
            <div className="container">
                
                <h2>Add one option per line</h2>
                <form onSubmit={this.props.onSubmit}>
                    <textarea className="ta_options" name="ta_options" rows="15" cols="30" value={this.props.options_textarea} onChange={this.props.onChangeValue}></textarea>
                    {this.props.ta_options_error === '' ? <div><button>Submit</button></div> : <div className="error">{this.props.ta_options_error}</div>}
                    
                </form>
                <h3>Prefilled options</h3>
                <div><button onClick={this.props.onClick} value="baby">Top 50 Boys' Names</button></div>
                <div><button onClick={this.props.onClick} value="vacation">European Vacation Destinations</button></div>
                <div><button onClick={this.props.onClick} value="netflix">Series on Netflix</button></div>
                <h3>Explanation</h3>
                <div className="explanation"><p>This app aims to simplify decisions by breaking them down into many comparisons between two choices. After you've made enough comparisons, you will get Trueskill rankings that will help you make the final decision.</p>  </div>
            </div>
            
            )

    }

}