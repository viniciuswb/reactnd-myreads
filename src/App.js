import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Aux from './Hoc/Aux'

import Header from './Components/Header/Header'
import ListBooks from './Components/ListBooks/ListBooks'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <Header/>
          <ListBooks/>
        </Aux>
      </MuiThemeProvider>
    )
  }
}

export default App
