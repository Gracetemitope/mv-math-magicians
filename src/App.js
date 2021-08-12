import React from 'react';

/* eslint-disable */
import Calculator from './Component/Calculator'; 
/* eslint-enable */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* eslint-disable */
  render() {
    /* eslint-enable */
    return (
    <div className="App">
    < Calculator />
  </div>
    );
  }
}

export default App;
