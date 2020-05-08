import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Clientes from './components/Clientes'
import Cliente from './components/Cliente'
import ClienteTipos from './components/ClienteTipos'
import ClienteTipo from './components/ClienteTipo'
import Monitoreo from './components/Monitoreo'

class App extends Component {
  render() {
    const loginLayout = ( 
            <div className="d-flex" id="wrapper">
              <div className="bg-light border-right" id="sidebar-wrapper">
                <Sidebar />
              </div>


              <div id="page-content-wrapper">

                <Topbar />

                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />

                <Route exact path="/clientes" component={Clientes} />
                <Route exact path="/cliente" component={Cliente} />            
                <Route exact path="/clienteUpdate/:id" component={Cliente} />

                <Route exact path="/clienteTipos" component={ClienteTipos} />
                <Route exact path="/clienteTipo" component={ClienteTipo} />
                <Route exact path="/clienteTipoUpdate/:id" component={ClienteTipo} />

                <Route exact path="/dispositivosMonitoreo/:id" component={Monitoreo} />
              </div>
            </div>
    )
     
    const notLoginLayout = ( 
            <div className="d-flex" id="wrapper">
              <div id="page-content-wrapper">
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
              </div>
            </div>
      )
      

    return (
      <Router>
        <div className="App">

          {localStorage.usertoken ? loginLayout : notLoginLayout}

        </div>
      </Router>
    )
  }
}

export default App
