import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.value]: e.target.value
    })
  }

  handleForm = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div>
          <label>
            Username
            <input
            id="username"
            value={this.state.username}
            onChange={this.handleInput}
            name="username"
            type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="password"
            value={this.state.password}
            onChange={this.handleInput}
            name="password"
            type="password"
            />
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
