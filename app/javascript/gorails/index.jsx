//This is for importing all the required pages
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//Renders elements in the toolbar for when the user is not signed in
function UserNotSignedIn() {
  return(
    <div className="floatleft">
      <a href="/users/sign_in">
          <img className="img-circle" id="icon" title="" data-toggle="tooltip" data-placement="bottom" src="/assets/user-2517433_1280.png" alt="User 2517433 1280" data-original-title="Sign-in"/>
      </a>
      |
      <a href="/users/sign_up">
          <img className="img-circle" id="icon" title="" data-toggle="tooltip" data-placement="bottom" src="/assets/user-2517430_1280.png" alt="User 2517430 1280" data-original-title="Sign Up"/>
      </a>
      <em>Not Signed In</em>
    </div>
  )
}

//Renders elements in the toolbar for when the user is signed in
function UserSignedIn() {
  return(
    <div className="floatleft">
      <a href="/users/edit">
          <img className="img-circle" id="icon" title="" data-toggle="tooltip" data-placement="bottom" src="/assets/information-2160912_1280.png" alt="Information 2160912 1280" data-original-title="Edit Your Information"/>
      </a>
      |
      <a href="/users">
        <img className="img-circle" id="icon" title="" data-toggle="tooltip" data-placement="bottom" src="/assets/group-2517459_1280.png" alt="Group 2517459 1280" data-original-title="See All Users"/>
      </a>
      |
      <a href="/tasks">
        <img className="img-circle" id="icon" title="" data-toggle="tooltip" data-placement="bottom" src="/assets/write-2160925_1280.png" alt="Write 2160925 1280" data-original-title="Tasks"/>
      </a>
      |
      <a rel="nofollow" data-method="delete" href="/users/sign_out">
        <img className="img-circle" id="icon" title="" data-toggle="tooltip" data-placement="bottom" src="/assets/shutdown-2297767_1280.png" alt="Shutdown 2297767 1280" data-original-title="Signout"/>
      </a>
      <em>Signed In</em>
    </div>
  )
}

function ConstantToolbar() {
  return (
    <div className="floatleft">
      <a href="/">
        <img className="img-circle" id="icon" title="" data-toggle="tooltip" data-placement="bottom" src="/assets/home-2160318_1280.png" alt="Home 2160318 1280" data-original-title="Home"/>
      </a>
      |
    </div>
  )
}

//Renders all the elements in the toolbar
function PartialRender() {
  const node = document.getElementById('root')
  const userSignedIn = JSON.parse(node.getAttribute('props'));

  if (userSignedIn){
  return(
      <div id="login_user_status">
        <UserSignedIn/>
      </div>
    )
  }
  else {
    return(
      <div id="login_user_status">
        <UserNotSignedIn/>
      </div>
    )
  }
}

function FinalRender() {
  return(
    <div id="login_user_status" className="pad10topleftbottom">
      <ConstantToolbar/>
      <PartialRender/>
    </div>
  )
}

ReactDOM.render(
    <FinalRender />, document.getElementById('root')
);
