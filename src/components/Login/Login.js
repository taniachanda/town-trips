import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBModalFooter, MDBRow } from 'mdbreact';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa"
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }


const Login = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var gitHubProvider = new firebase.auth.GithubAuthProvider();
    const [user, setLoggedInUser] = useContext(UserContext) ;
    const history = useHistory();
    const location = useLocation();
    const { form } = location.state || { from: { pathname: "/" } };
   
   
    
  const handleGoogleSignIn = () =>{
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const {displayName, email} = result.user;
    const userLogin = { name: displayName, email }
    setLoggedInUser(userLogin);;
    history.replace(form)

  }).catch((error) => {
    const  errorMessage = error.message;
    setLoggedInUser(errorMessage)
  });
    }


    const handleGitHubSignIn = () => {
      firebase.auth()
  .signInWithPopup(gitHubProvider)
  .then((result) => {
    const {displayName, email} = result.user;
    const userLogin = { name: displayName, email }
    setLoggedInUser(userLogin);;
    history.replace(form)

    console.log(user);
  }).catch((error) => {
    const  errorMessage = error.message;
    setLoggedInUser(errorMessage)
  });
    }

    const handleSubmit =(e)=>{
      if( user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            console.log(res)
          })
          .catch((error) => {
            
            var errorMessage = error.message;
            console.log(errorMessage)
          });
      }
      e.preventDefault();
  }

    const handleEmailAndPasswordSignIn = (e) => {
      let isFieldValid;
      if (e.target.name === "email") {
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
         
      }
     if( e.target.name === "password"){
         const isPasswordValid = e.target.value.length > 6 ;
         const PasswordNumber = /\d{1}/.test(e.target.value);
         isFieldValid = isPasswordValid && PasswordNumber
     }
     if( isFieldValid ){
         const {displayName, email} = {...user};
          const NewUserInfo  = { name: displayName , email } ;
          handleEmailAndPasswordSignIn(NewUserInfo)
     }
  }
    return (
           <MDBContainer>
      <MDBRow  className="justify-content-center">
        <MDBCol md="6">
          <MDBCard  onClick={handleSubmit}>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
              onBlur={handleEmailAndPasswordSignIn}
              name="name"
                group
                type="text"
                validate
                error="wrong"
                success="right" placeholder="Name"
              />
              <MDBInput
              onBlur={handleEmailAndPasswordSignIn}
              name="email"
                group
                type="email"
                validate
                error="wrong"
                success="right" placeholder="Email" required 
              />
              <MDBInput
               onBlur={handleEmailAndPasswordSignIn}
                group
                type="password"
                validate
                containerClass="mb-0"
                name="password" placeholder="Password" required 
              />
              <button type="submit" class="btn btn-primary" value="Create an account">Submit</button>
              
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <FaFacebook fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <FaGithub onClick={handleGitHubSignIn}className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <FaGoogle onClick={handleGoogleSignIn} fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
         
    );
};

export default Login;