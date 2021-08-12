import React from 'react';
/* eslint-disable */
import Calculator from './Component/Calculator'; 
/* eslint-enable */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
    <div className="App">
    <Calculator>{result}</Calculator>
  </div>
    );
  }
}

export default App;
