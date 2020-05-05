import * as React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Restaurant from './pages/Restaurant/Restaurant.component';
import {Switch, Route} from 'react-router-dom';
import PaginaUm from './pages/PaginaUm/PaginaUm.component';
import PaginaDois from './pages/PaginaDois/PaginaDois.component'
import Nav from './components/Nav/Nav.component';
import Footer from './components/Footer/Footer.component'

function App() {

  
  return (
    //<div class="jumbotron-fluid"></div>
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/restaurants/:handle' component={Restaurant}/>
        <Route exact path='/paginaum' component={PaginaUm}/>
        <Route exact path='/paginadois' component={PaginaDois}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
