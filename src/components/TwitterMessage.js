import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ""
    };
  }
  
  handleChange = (event) =>{
    this.setState({
      val: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default TwitterMessage;
