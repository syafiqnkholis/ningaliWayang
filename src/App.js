import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Tentang from './components/Tentang'
import Wayang from './components/Wayang'
import Pagelaran from './components/Pagelaran'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <BrowserRouter>
        <div>
        <Route path='/' component={Home}/>
        <Route path='/tentang' component={Tentang}/>
        <Route path='/wayang' component={Wayang}/>
        <Route path='/pagelaran' component={Pagelaran}/>
        </div>
      </BrowserRouter> 
      </div>
    )
  }
}

export default App
