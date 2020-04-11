import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Clientes from './components/Clientes'
import Cliente from './components/Cliente'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/cliente" component={Cliente} />            
            <Route exact path="/cliente-edit/:id" component={Cliente} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
