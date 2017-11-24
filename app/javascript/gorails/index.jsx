//This is for importing all the required pages
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function ConstantToolbar() {
  return (
    <span>
      <span className="navpadding">
        <a href="/">
        <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/home-2160318_1280.png" alt="Home 2160318 1280" data-original-title="Home"/>
        <span id="nav7" className="animated flipInZ">Home</span>
      </a>
    </span>
  </span>
  )
}

//Renders elements in the toolbar for when the user is not signed in
function UserNotSignedIn() {
  return(
    <span>
      <ConstantToolbar/>
      <span className="navpadding">
        <a href="/users/sign_in">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/user-2517433_1280.png" alt="User 2517433 1280" data-original-title="Sign-in"/>
          <span id="nav1" className="animated flipInZ">Sign In</span>
        </a>
    </span>
    <span className="navpadding">
      <a href="/users/sign_up">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/user-2517430_1280.png" alt="User 2517430 1280" data-original-title="Sign Up"/>
          <span id="nav2" className="animated flipInZ">Sign Up</span>
      </a>
    </span>
      <em>Not Signed In</em>
    </span>
  )
}

//Renders elements in the toolbar for when the user is signed in
function UserSignedIn() {
  return(
    <span>
      <ConstantToolbar/>
      <span className="navpadding">
        <a href="/users/edit">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/information-2160912_1280.png" alt="Information 2160912 1280" data-original-title="Edit Your Information"/>
          <span id="nav3" className="animated flipInZ">Edit Info</span>
        </a>
      </span>
      <span className="navpadding">
        <a href="/users">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/group-2517459_1280.png" alt="Group 2517459 1280" data-original-title="See All Users"/>
          <span id="nav4" className="animated flipInZ">All Users</span>
        </a>
      </span>
      <span className="navpadding">
        <a href="/tasks">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/write-2160925_1280.png" alt="Write 2160925 1280" data-original-title="Tasks"/>
          <span id="nav5" className="animated flipInZ">Tasks</span>
        </a>
      </span>
      <span className="navpadding">
        <a rel="nofollow" data-method="delete" href="/users/sign_out">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/shutdown-2297767_1280.png" alt="Shutdown 2297767 1280" data-original-title="Signout"/>
          <span id="nav6" className="animated flipInZ">Signout</span>
        </a>
      </span>
      <em>Signed In</em>
    </span>
  )
}

//Renders all the elements in the toolbar
function PartialRender() {
  const node = document.getElementById('root')
  const userSignedIn = JSON.parse(node.getAttribute('props'));

  if (userSignedIn){
  return(
      <span>
        <UserSignedIn/>
      </span>
    )
  }
  else {
    return(
      <span>
        <UserNotSignedIn/>
      </span>
    )
  }
}

function FinalRender() {
  return(
    <ul id="nobullet" className="col-12">
      <PartialRender/>
    </ul>
  )
}

ReactDOM.render(
    <FinalRender/>, document.getElementById('root')
);
