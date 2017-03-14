"use strict";

const React = require('react')
  , ReactDOM = require('react-dom')
  , $fh = require('fh-js-sdk');

const WELCOME_TEXT = `
  This is a basic React App that can take in your name, 
  send it to a cloud app and display the response.
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      message: "",
      cloudResponse: ""
    };

    // Those bindings are required to make `this` work in the callbacks
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This method is called when the input field fires the `onChange` event
  handleChange(event) {
    this.setState({
      message: event.target.value,
      cloudResponse: this.state.cloudResponse
    });
  }

  // This method is called when the `Submit` button is pressed
  handleSubmit() {
    var self = this;

    $fh.cloud({
        path: 'hello',
        data: {
          hello: self.state.message
        },
      },
      function (res) {
        // Update the component state. This will trigger also update the view
        self.setState({
          message: "",
          cloudResponse: res.msg
        });
      },
      function (errorCode) {
        alert(`An error with code ${errorCode} occurred`);
      }
    );
  }

  // The `render` method is the
  render() {
    return (
      <div>
        <p id="description">{WELCOME_TEXT}</p>
        <br></br>
        <input
          className="input-text"
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Input your Name"
        />
        <br></br>
        <button className="say-hello-button" onClick={this.handleSubmit}>Submit</button>
        <br></br>
        <p>{this.state.cloudResponse}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));