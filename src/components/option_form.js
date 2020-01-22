import React from 'react';


export default class OptionForm extends React.Component {
    constructor(props) {
        super(props);
        
    }



    render() {

            return (
                
            <div className="container">
                <h3>Prefilled selections</h3>
                <button onClick={this.props.onClick} value="vacation">European Vacation</button>
                <button onClick={this.props.onClick} value="baby">Baby Boy's Name</button>
                    <h3>Add your own options</h3>
                <p>One per line</p>
                <form onSubmit={this.props.onSubmit}>
                    <textarea name="ta_options" rows="30" cols="30" value={this.props.options_textarea} onChange={this.props.onChangeValue}></textarea>
                    <p><button>Submit</button></p>
                </form>
            </div>
            
            )

    }

}