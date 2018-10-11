import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  handleChange = () =>{
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
