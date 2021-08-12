import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <section className="container mb-3 mt-3">
        <div className="result">
          <p className="float-right p-4 text-right">{result}</p>
        </div>
        <div className="calculator d-flex flex-column">
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5">AC</button>
            <button className="p-5">+/-</button>
            <button className="p-5">%</button>
            <button className="p-5 orange">/</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5">7</button>
            <button className="p-5">8</button>
            <button className="p-5">9</button>
            <button className="p-5 orange">x</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5">4</button>
            <button className="p-5">5</button>
            <button className="p-5">6</button>
            <button className="p-5 orange">-</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5">1</button>
            <button className="p-5">2</button>
            <button className="p-5">3</button>
            <button className="p-5 orange">+</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5 button-2">0</button>
            <button className="p-5">.</button>
            <button className="p-5 orange">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;