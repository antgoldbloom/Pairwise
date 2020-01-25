import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  
    render() {

      const vals = this.props.options;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell align="right">Mu</TableCell>
            <TableCell align="right">Sigma</TableCell>
            <TableCell align="right">Prune</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(this.props.options).map(option => ( 
            <TableRow key={option}>
              <TableCell component="th" scope="row">
                {option}
              </TableCell>
              <TableCell align="right">{vals[option].mu.toFixed(1)}</TableCell>
              <TableCell align="right">{vals[option].sigma.toFixed(1)}</TableCell>
              <TableCell align="right"><button className="delete" value={option} onClick={this.props.onClick}>x</button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
    
        } 
  }