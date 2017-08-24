import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const styleSheet = createStyleSheet('MySquad', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

let id = 0;
function createData(position, name, avatar) {
  id += 1;
  return { id, position, name, avatar };
}
const style = {
  margin: 5
};
const data = [
  createData('Jay Ajayi (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/AJA771256.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Doug Baldwin (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL312014.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Golden Tate (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TAT245022.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Larry Fitzgerald (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/FIT437493.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Paul Perkins (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PER227681.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Frank Gore (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GOR411171.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Adam Thielen (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/THI510348.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Marcus Mariota (QB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAR186347.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Julius Thomas (TE)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/THO265401.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Jamaal Charles (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHA561428.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Tyrod Taylor (QB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TAY764868.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Kansas City Chiefs (D/ST)',  <Avatar 
                        src={'http://i.nflcdn.com/static/site/7.5/img/teams/KC/KC_logo-80x90.gif'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Justin Tucker (K)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TUC224643.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Jason Witten (TE)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WIT559021.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Devin Funchess (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/FUN405541.png'}
                        size={80} 
                        style={style}
                    /> ),

];

function MySquad(props) {
  const classes = props.classes;

  return (
    <Paper className={classes.paper}>
      <Table> 
        <TableHead>
          <TableRow>
            <TableCell >Pick</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>
                  {n.id}
                </TableCell>
                <TableCell >
                  {n.position}
                </TableCell>
                <TableCell >
                  {n.name}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

MySquad.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(MySquad);