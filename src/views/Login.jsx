import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/login.css";
import logoEngie from "../assets/img/engielogo.png";
import logoOns from "../assets/img/ons.png";





class Login extends Component{
render(){

  function toDashboardOns(){
    window.location = "/ons/calls";
  }

  function toDashboardOp(){
    window.location = "/op/calls";
  }

  return(
  <div class="login">
    <div class="loginBox">
      <img src={logoEngie} class="logoEngie" alt="Logo"/>
      <div ><h3>Login:</h3><input type="text"></input></div>
      <div ><h3>Senha:</h3><input type="password"></input></div>
      <button onClick={toDashboardOp}> Entrar</button>
      </div>
    
    <div class="loginBox">
      <img src={logoOns} class="logoOns" alt="Logo"/>
      <div ><h3>Login:</h3> <input type="text"></input></div>
      <div ><h3>Senha:</h3> <input type="password"></input></div>
      <button onClick={toDashboardOns}>Entrar</button>

    </div>
    </div>
  );
}
}
  export default Login;
