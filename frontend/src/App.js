import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { store, history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/theme'
import {grey, red, blue, pink, indigo} from 'material-ui/colors'
import createPalette from 'material-ui/styles/palette'
import Layout from './Layout';
import Main from './Main';
import Apptabs from './components/mainview/Appbar/Apptabs';
import Teams from './components/mainview/Teams';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Widgets from './components/widgets/Widget';
import { ToolbarGroup, FlatButton} from 'material-ui';
import LGK from './lgklogo.png';
import MySquad from './components/mainview/Squads/MySquad';
import League from './components/mainview/League';
injectTapEventPlugin();


class App extends Component {
  render() {
    const muiTheme = createMuiTheme({
        palette: createPalette({
          primary: blue,
          accent: pink,
          error: red
        })
    });

    return (
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>  
          <Provider store={store}>
             <ConnectedRouter history={history}> 
              <Layout>
                 <Router> 
                  <Switch> 
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route path="/widgets" component={Widgets} />
                    <Route render={function() {
                      return <p>PAGE NOT FOUND YOU DINGUS!!!</p>
                    }} />
                  </Switch>
                 </Router>  
              </Layout>
             </ConnectedRouter> 
          </Provider>
        </MuiThemeProvider>
      </div>

    );
  }
}

App.propTypes = {  
  children: PropTypes.node,
}

export default App;
