import React, { Component } from "react";
import { API } from "../../requests";
import "./login.css";
import Registration from "../registration/registration";
import {Link} from "react-router-dom";

export default  class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target),
      data = {};
    formData.forEach(function(value, key) {
      data[key] = value;
    });
    let req = await fetch(`${API}/Account/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const res = await req.json();
    if (res.status === 400) {
      // console.log(res);
      return this.setState({ error: res.message, status: true });
    }
    // console.log(req);
    if (res.access_token) {
      localStorage.setItem("token", res.access_token);
      
      if(data.login === "admin" && data.password === '123456'){
        this.props.history.push(`/admin`);
      }else{
        this.props.history.push(`/mainPage`);
      }
    }
  }

  render() {
    return (
      <div className="loginWrapper">
        <div className="login">
          <h1>Авторизация</h1>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <input
              className="loginInput"
              type="text"
              placeholder="Логин"
              name="login"
              required
            />
            <br />
            <input
              className="loginInput"
              type="password"
              placeholder="Пароль"
              name="password"
              required
            />
            <br />
            {this.state.status ? (
              <div className="errorMessage">{this.state.error}</div>
            ) : null}
            <br />
            <input
              className="loginInput loginBtn"
              value="Sign in"
              type="submit"
            />
          </form>
          <Link to='/registration'>
          <button type="submit">Регистрация</button>
          </Link>
        </div>
      </div>
    );
  }
}


// import React, { useState, useEffect } from "react";
// import "./login.css";
// import { Link } from "react-router-dom";
// import { API } from '../../requests';

// function Login(props) {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert(`Submitting Name`);    
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} id="login-form">
//         <h1 id="login-label">Войти</h1>
//         <input
//           id="login"
//           type="text"
//           placeholder="login"
//           required="true"
//           onChange={e => setLogin(e.target.value)}
//         />
//         <input
//           id="password"
//           type="password"
//           placeholder="password"
//           required="true"
//           onChange={e=> setPassword(e.target.value)}
//         ></input>
//         {/* <Link to='mainPage'> */}
//         <button id="login-button">Войти</button>
//         {/* </Link> */}
//       </form>
//     </div>
//   );
// }

// export default Login;
