import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '' 
    };
  }

  handleTweet = (event) => {
    this.setState({tweet: event.target.value})
  }

  countingChars = () => {
    return this.props.maxChars - this.state.tweet.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name = 'tweet' value = {this.state.tweet} onChange = {this.handleTweet}/>

        <h2>{this.countingChars()}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
