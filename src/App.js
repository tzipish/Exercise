import React from 'react';
import domUtils from './DomUtils'
import './App.css';

class App extends React.Component {
  utils;
  
  constructor() {
    super();
    this.utils = new domUtils();
    this.state = {
      value: ""
    }
  }

  changeValueById = (id) => {
    const val = this.utils.elementValue(id);
    this.setState({
      value: val
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="hello">hello world</div>
        <button onClick={() => this.changeValueById("hello")}>
          Click here to see the value
        </button>
        <span>The value is: {this.state.value}</span>
      </React.Fragment>
    );
  }
}

export default App;
