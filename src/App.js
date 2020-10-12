import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appoinment/Appoinment/Appointment';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AllPatients from './components/AllPatients/AllPaitients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
export const userContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path='/appointment'>
           <Appointment />
         </Route>
         <Route path='/login'>
           <Login />
           </Route>
       <PrivateRoute  path='/dashboard'>
                <DashBoard />
           </PrivateRoute>
         <PrivateRoute exact path='/allpatients'>
               <AllPatients />
           </PrivateRoute>
         <Route path='/addDoctor'>
           <AddDoctor />
         </Route>
           <Route exact path='/'>
            <Home />
         </Route>
       
      </Switch>
    </Router>
</userContext.Provider>

    
  );
}

export default App;
