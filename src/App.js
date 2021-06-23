import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Navbar from './components/Navbar/HomeNavbar';
export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});
  console.log(signedInUser);

  return (
    <UserContext.Provider value = {[signedInUser, setSignedInUser]}>
        <Router>
          <Navbar/>
        <Switch>
          <Route path="/home" component={Home}>
           <Home/> 
          </Route>
          <Route exact path="/" component={Home}> 
          <Home/> 
          </Route>
          <PrivateRoute path="/destination/:vehicle">
            <Destination />
          </PrivateRoute>
          {/* <Route path="/blog">
          </Route> */}
          {/* <Route path="/contact" component={Login}>       
          </Route> */}
          <Route path="/login" component={Login}>
          <Login/>
          </Route>    
          <Route path="*" component={NotFound}>
            <NotFound/>
          </Route>
        </Switch>
      </Router> 
      </UserContext.Provider>
  );
}

export default App;
