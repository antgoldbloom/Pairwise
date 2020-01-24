import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import App from '../App';

export default class Navbar extends React.Component {

    render() {
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Pairwise Comparisons
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

        )
        

    }

}
