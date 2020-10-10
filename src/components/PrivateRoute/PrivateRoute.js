import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { userContext } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if(!token){
          return false;
        }
        const decodedToken = jwt_decode(token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
      }
    return (
      <Route
        {...rest}
        render={({ location }) =>
        (loggedInUser.email || isLoggedIn)? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute