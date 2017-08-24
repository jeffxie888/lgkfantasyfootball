import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const styleSheet = createStyleSheet('Squad2', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

let id = 0;
function createData(player, name) {
  id += 1;
  return { id, player, name };
}
const style = {margin: 5};
const data = [
  createData('Leveon Bell (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BEL474300.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Brandin Cooks (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/COO299382.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Tyreek Hill (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HIL628694.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Willie Snead (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SNE115447.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Carlos Hyde (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HYD402541.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Martellus Bennett (TE)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BEN379259.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('John Brown (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRO494712.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Duke Johnson (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JOH000009.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('James White (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WHI242257.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Jameis Winston (QB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WIN623708.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Cole Beasley (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BEA434808.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Derek Carr (QB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR358797.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Torrey Smith (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SMI344958.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('New England Patriots (TE)',  <Avatar 
                        src={'http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Sebastian Janikowski (K)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAN400354.png'}
                        size={80} 
                        style={style}
                    /> )
];

function Squad2(props) {
  const classes = props.classes;

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >Pick</TableCell>
            <TableCell>Player</TableCell>
            <TableCell>Avatar</TableCell>
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
                  {n.player } 
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

Squad2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Squad2);