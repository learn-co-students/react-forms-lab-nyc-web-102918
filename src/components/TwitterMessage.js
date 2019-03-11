import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsLeft: 140,
      tweet: ''
    };
  }

  handleInput = (e) => {
    let charsLeft = this.props.maxChars - e.target.value.length
    this.setState({
      charsLeft: charsLeft,
      tweet: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.charsLeft}</h1>
        <strong>Your message:</strong>
        <input
        value={this.state.tweet}
        onChange={this.handleInput}
        type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
