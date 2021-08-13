import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      total: '',
      next: '',
      operation: ''
    };
  }
eventHandler(newState) {
    if (newState.total != null) {
      this.setState({ total: newState.total });
    }

    this.setState({ next: newState.next });

    if (newState.operation != null) {
      this.setState({ operation: newState.operation });
    }
  }


  render() {

   const{total, next, operation} = this.state
    return (
      <section className="container mb-3 mt-3">
        <div className="result">
          <p className="float-right p-4 text-right">{total}  { ' ' }
            { operation }
            { ' ' }
            { next }
</p>
        </div>
        <div className="calculator d-flex flex-column">
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5"  onClick={() => { this.eventHandler(calculate(this.state, 'AC')); }}>AC</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '+/-')); }}>+/-</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '%')); }}>%</button>
            <button className="p-5 orange" onClick={() => { this.eventHandler(calculate(this.state, '÷')); }}>÷
</button>
          </div> 
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '7')); }} >7</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '8')); }}>8</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '9')); }}>9</button>
            <button className="p-5 orange" onClick={() => { this.eventHandler(calculate(this.state, 'x')); }}>x</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '4')); }}>4</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '5')); }}>5</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '6')); }}>6</button>
            <button className="p-5 orange" onClick={() => { this.eventHandler(calculate(this.state, '-')); }}>-</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '1')); }}>1</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '2')); }}>2</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '3')); }}>3</button>
            <button className="p-5 orange">+</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5 button-2" onClick={() => { this.eventHandler(calculate(this.state, '0')); }}>0</button>
            <button className="p-5" onClick={() => { this.eventHandler(calculate(this.state, '.')); }}>.</button>
            <button className="p-5 orange" onClick={() => { this.eventHandler(calculate(this.state, '=')); }}>=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;