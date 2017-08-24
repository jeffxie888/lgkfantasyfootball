import React, { Component } from 'react';
import LGK from './lgklogo.png';
import './App.css';
import MainAppbar from './components/mainview/Appbar/MainAppBar';


class Main extends Component {
  render() {    
    return (
      <div>
        <MainAppbar />
        <section className="App-body">
            {this.props.children}
        </section> 
      </div>
    );
  }
}

export default Main;