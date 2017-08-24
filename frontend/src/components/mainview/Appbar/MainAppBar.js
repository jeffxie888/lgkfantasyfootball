import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';  
import LGK from '../../../lgklogo.png';
import Apptabs from './Apptabs';


const styleSheet = createStyleSheet('MainAppBar', {
    title: {
      marginTop: '50px',
      marginRight: '35px',
      marginBottom: '15px',
      marginLeft: '0px',
      fontSize: '48px'
    },
    appbar: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #2196F3 90%)'
    },
    root: {
      width: '100%',
    },
    flex: {
      flex: 1
    },
    button: {
      marginLeft: '50px'
    }
});

function MainAppBar(props) {
      const classes = props.classes;
      return (
        <div className={classes.root}>
          <AppBar 
            position="static"
            className={classes.appbar}
          >
            <Toolbar>
              <Typography type="title" className={classes.title}>
                <img src={LGK} 
                    className="App-logo" 
                    alt="logo" 
                /> Fantasy Football League
              </Typography>
              {/* <Button color="contrast" className={classes.button}>Login</Button> */}
            </Toolbar>
          </AppBar>
          <Apptabs /> 
        </div>
      );
    }


MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(MainAppBar);