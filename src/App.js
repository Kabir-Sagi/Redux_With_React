
import './App.css';
import Home from './Components/Home'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Nav'
import User from './Components/User'
import Post from './Components/Post'

function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/post" component={Post} />
         
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
