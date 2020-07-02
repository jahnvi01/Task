import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Products from './components/orders';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (

    <div className="App">
<Header />
    <Switch>  
     <div>   
    <Route exact path="/" component={Home} />
    <Route path="/order" component={Products} />
    </div>
    </Switch > 


      </div>
    );
  }
}

export default App;