import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Aux from './hoc/Aux'

import Header from './components/Header/Header'
import BookShelfList from './components/BookShelfList/BookShelfList'

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
