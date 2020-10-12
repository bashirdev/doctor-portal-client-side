import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import LoginBg from '../../../images/LoginBg.png'
import { userContext } from '../../../App';
import firebaseConfig from './FirebaseConfig';

const Login = () => {

 
    const [loggedInUser,setLoggedInUser]= useContext(userContext);
  
    const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

 if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
 }
  const handleGoogleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
   .then((result)=> {
       const {displayName, email} = result.user;
       const signedInUser={name:displayName, email}
       setLoggedInUser(signedInUser);
       StoreAuthToken();
      
      })
      .catch((error)=> {
         const errorMessage=error.message;
         console.log(errorMessage);
      });
        
};

const StoreAuthToken=()=>{
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  .then((idToken) =>{
    sessionStorage.getItem('token', idToken);
    history.replace(from);
    // Send token to your backend via HTTPS
    // ...
  }).catch(function(error) {
    // Handle error
  });
}
    return (
      <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
    );
};
  

export default Login;