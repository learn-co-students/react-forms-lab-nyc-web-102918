import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      maxChars: this.props.maxChars,
      tweet: '',
      tweetChars: '',
      remainingChars: '',
    });
  }

  handleChange = (event) => {
    const input = event.target.value
    const max = this.state.maxChars
    
    this.setState({
      tweet: input,
      tweetChars: input.length,
      remainingChars: max - input.length
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange}/>
        <p>Maximum Characters: {this.state.maxChars} </p>
        <p>Characters Remaining: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
