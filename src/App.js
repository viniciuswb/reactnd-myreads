import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './Components/Header/Header'
import ListBooks from './Components/ListBooks/ListBooks'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
        <ListBooks/>
      </MuiThemeProvider>
    );
  }
}

export default App;
