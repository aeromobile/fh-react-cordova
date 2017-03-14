"use strict";

const React = require('react')
  , ReactDOM = require('react-dom')
  , $fh = require('fh-js-sdk');

const WELCOME_TEXT = 'This is a basic React App that can take in your name, send it to a cloud app and display the response.';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit() {
    alert(this.state.message);
  }

  render() {
    return (
      <div>
        <p id="description">{WELCOME_TEXT}</p>
        <br></br>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <br></br>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));