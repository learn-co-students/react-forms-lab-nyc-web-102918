import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange= (event) => {
    // debugger
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //If the username and password fields are populated, pass the object into the login function in App.js (which was passed down to LoginForm.js as a prop named onSubmit)
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      return this.props.onSubmit(this.state)
    }

    //Another way to write the above:
    // if (!this.state.username === "" || !this.state.password === "") {
    //   return this.props.onSubmit(this.state)
    // }
  }

  render() {
    // console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
