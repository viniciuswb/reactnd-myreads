import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from "./Components/Layout/Header/Header"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
    );
  }
}

export default App;
