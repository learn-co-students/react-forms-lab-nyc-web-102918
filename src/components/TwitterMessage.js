import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      valorDelmensaje: ""
    };
  }

  handleEvent = (event) => {
    this.setState({
      valorDelmensaje: event.target.value
    })
  }

//aqui utilizo .props.maxChars porq es una propiedad que viene del padre
  render() {
    return (
      <div>
        <strong>Your valorDelmensaje:</strong>
        <input onChange={this.handleEvent} value={this.state.valorDelmensaje} type="text" />
         <p>Caracteres: {this.props.maxChars - this.state.valorDelmensaje.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
