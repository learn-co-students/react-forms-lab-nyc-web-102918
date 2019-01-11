import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

HandleSubmit = (e) => {
  e.preventDefault()
  // ✓ should call the prevent the default action when the form is being submitted (47ms)
  //     ✓ should call the `onSubmit` callback prop when the form is being submitted
   if (this.state.username !== '' && this.state.password !== '') {
     this.props.onSubmit(this.state)
   }

}

handleChange = (e) => {
  this.setState({
    username: e.target.value
    // estp si quisiera unir los chage handle en uno [e.target.name]: event.target.value
   })
}

handleChange1 = (e) => {
  this.setState({
    password: e.target.value
  })
}





  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange1} id="password" name="password" type="password"   />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}


export default LoginForm;
