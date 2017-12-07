import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Aux from './Hoc/Aux'

import Header from './Components/Header/Header'
import BookShelfList from './Components/BookShelfList/BookShelfList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <Header/>
          <BookShelfList/>
        </Aux>
      </MuiThemeProvider>
    )
  }
}

export default App
