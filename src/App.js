import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/Header'
import BookShelfList from './components/BookShelfList'
import SearchBooks from './components/SearchBooks'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Route path="/" component={Header} />
          <Route exact path="/" component={BookShelfList} />
          <Route path="/search" component={SearchBooks} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
