//This is for importing all the required pages
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function ConstantToolbar() {
  return (
    <div>
      <div className="">
        <a href="/">
        <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/home-2160318_1280.png" alt="Home 2160318 1280" data-original-title="Home"/>
        <div id="nav7" className="animated flipInZ">Home</div>
      </a>
    </div>
  </div>
  )
}

//Renders elements in the toolbar for when the user is not signed in
function UserNotSignedIn() {
  return(
    <div>
      <ConstantToolbar/>
      <div className="">
        <a href="/users/sign_in">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/user-2517433_1280.png" alt="User 2517433 1280" data-original-title="Sign-in"/>
          <div id="nav1" className="animated flipInZ">Sign In</div>
        </a>
    </div>
    <div className="">
      <a href="/users/sign_up">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/user-2517430_1280.png" alt="User 2517430 1280" data-original-title="Sign Up"/>
          <div id="nav2" className="animated flipInZ">Sign Up</div>
      </a>
    </div>
      <em>Not Signed In</em>
    </div>
  )
}

//Renders elements in the toolbar for when the user is signed in
function UserSignedIn() {
  return(
    <div>
      <ConstantToolbar/>
      <div className="">
        <a href="/users/edit">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/information-2160912_1280.png" alt="Information 2160912 1280" data-original-title="Edit Your Information"/>
          <div id="nav3" className="animated flipInZ">Edit Info</div>
        </a>
      </div>
      <div className="">
        <a href="/users">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/group-2517459_1280.png" alt="Group 2517459 1280" data-original-title="See All Users"/>
          <div id="nav4" className="animated flipInZ">All Users</div>
        </a>
      </div>
      <div className="">
        <a href="/tasks">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/write-2160925_1280.png" alt="Write 2160925 1280" data-original-title="Tasks"/>
          <div id="nav5" className="animated flipInZ">Tasks</div>
        </a>
      </div>
      <div className="">
        <a rel="nofollow" data-method="delete" href="/users/sign_out">
          <img className="img-circle flipper" id="icon" title="" data-toggle="tooltip" data-placement="right" src="/assets/shutdown-2297767_1280.png" alt="Shutdown 2297767 1280" data-original-title="Signout"/>
          <div id="nav6" className="animated flipInZ">Signout</div>
        </a>
      </div>
      <em>Signed In</em>
    </div>
  )
}

//Renders all the elements in the toolbar
function ChooseRender() {
  const node = document.getElementById('root')
  const userSignedIn = JSON.parse(node.getAttribute('props'));

  if (userSignedIn){
  return(
      <div>
        <UserSignedIn/>
      </div>
    )
  }
  else {
    return(
      <div>
        <UserNotSignedIn/>
      </div>
    )
  }
}

function FinalRender() {
  return(
    <div className="sidebarsetup">
      <ChooseRender/>
    </div>
  )
}

ReactDOM.render(
    <FinalRender/>, document.getElementById('root')
);
