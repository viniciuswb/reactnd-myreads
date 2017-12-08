import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Aux from './hoc/Aux'
import Header from './components/Header'
import BookShelfList from './components/BookShelfList'
import SearchBooks from './components/SearchBooks'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <Header/>
          <Route exact path="/" component={BookShelfList} />
          <Route exact path="/search" component={SearchBooks} />
        </Aux>
      </MuiThemeProvider>
    )
  }
}

export default App
