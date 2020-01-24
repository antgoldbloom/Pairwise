import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';



export default class OptionForm extends React.Component {
    constructor(props) {
        super(props);
        
    }

      

    render() {

        
        return (
                
            <div>
    {this.props.ta_options_error === '' ? <Alert severity="info">Add one item per line. Must add at least four options before you can submit.</Alert> : <Alert severity="warning">{this.props.ta_options_error}   </Alert>}
                <p>
                <form onSubmit={this.props.onSubmit}>
                    <textarea className="ta_options" name="ta_options" rows="15" cols="30" value={this.props.options_textarea} placeholder="This app aims to simplify decisions by breaking them down into many comparisons between two choices. After you've made enough comparisons, you will get Trueskill rankings that will help you make the final decision." onChange={this.props.onChangeValue}></textarea>
                    {this.props.option_count > 3 ? 
                        <div><Button type="submit" variant="contained">Submit</Button></div>  : <div></div> }
                    
                </form>
                </p>
    
                <p>

                        <NativeSelect onChange={this.props.onSelect}>
                        <option value="">Prefilled Options</option>
                        <option value="babyboy">Top 50 Boys' Names</option>
                        <option value="vacation">European Vacation</option>
                        <option value="netflix">Series on Netflix</option>
                        </NativeSelect>
            </p>

            </div>
            
            )

    }

}