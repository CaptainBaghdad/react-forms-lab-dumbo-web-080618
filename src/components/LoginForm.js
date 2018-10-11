import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password:""
    };
  }
  
  handleChange(event){
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={() => this.props.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
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
