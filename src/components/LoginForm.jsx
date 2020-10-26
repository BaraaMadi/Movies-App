import React  from "react";
import Joi from "joi-browser";
import  Form from './common/Form'

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
      // call serves
      console.log('Submitted')
  };
  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", 'password')}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
