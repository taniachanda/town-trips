import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App(props) {
  const [user, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[user, setLoggedInUser]}>
        <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
           <Home></Home> 
          </Route>
          <PrivateRoute path={"/destination"}>
            <Destination />
          </PrivateRoute>
          <Route path="/blog">

          </Route>
          <Route path="/contact">       
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route exact path="/">
          <Home></Home> 
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router> 
      </UserContext.Provider>

  );
}

export default App;
