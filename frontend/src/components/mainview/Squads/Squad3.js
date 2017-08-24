import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const styleSheet = createStyleSheet('Squad3', theme => ({
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
  createData('David Johnson (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JOH174477.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Allen Robinson (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ROB365982.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Ty Montgomery (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MON677133.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Julian Edelman (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/EDE425791.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Donte Moncrief (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MON117004.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Tyler Eifert (TE)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/EIF131143.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Adrian Peterson (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PET260705.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Brandon Marshall (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAR370922.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Derrick Henry (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HEN602843.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Tyler Lockett (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LOC420915.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Jonathan Williams (RB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WIL384555.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Andy Dalton (QB)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL659900.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('J.J. Nelson (WR)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NEL488051.png'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Los Angeles Chargers (D/ST)',  <Avatar 
                        src={'http://i.nflcdn.com/static/site/7.5/img/teams/LAC/LAC_logo-80x90.gif'}
                        size={80} 
                        style={style}
                    /> ),
  createData('Stephen Gostkowski (K)',  <Avatar 
                        src={'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GOS721266.png'}
                        size={80} 
                        style={style}
                    /> )
];

function Squad3(props) {
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

Squad3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Squad3);