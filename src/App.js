import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appoinment/Appoinment/Appointment';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AppoinmentForm from './components/Appoinment/AppoinmentForm/AppoinmentForm';
export const userContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
         <Route exact path='/'>
            <Home />
         </Route>
         <Route path='/login'>
           <Login />
           <PrivateRoute path='/book/:id'>
                <AppoinmentForm />
           </PrivateRoute>
         </Route>
         <Route path='/appointment'>
           <Appointment />
         </Route>
      </Switch>
    </Router>
</userContext.Provider>

    
  );
}

export default App;
