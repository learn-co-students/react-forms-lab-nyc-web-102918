import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charactersLeft: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      charactersLeft: this.props.maxChars - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        <h1>Characters Left: {this.state.charactersLeft}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
