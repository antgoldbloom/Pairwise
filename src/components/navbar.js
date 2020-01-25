import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Navbar extends React.Component {

    render() {
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            <a href="" onClick={this.props.onClick} className="heading">Pairwise Comparisons</a>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

        )
        

    }

}
