/* eslint-disable */
import React, { useState } from 'react';
/* eslint-enable */
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [operation, setOperation] = useState('');
  const [next, setNext] = useState('');

  const obj = {
    total,
    next,
    operation,
  };
  const eventHandler = (newState) => {
    if (newState.total != null) {
      setTotal(newState.total);
    }

    setNext(newState.next);

    if (newState.operation != null) {
      setOperation(newState.operation);
    }
  };
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
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, 'AC')); }}>AC</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '+/-')); }}>+/-</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '%')); }}>%</button>
            <button className="p-5 orange" onClick={() => { eventHandler(calculate(obj, '÷')); }}>÷
</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '7')); }} >7</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '8')); }}>8</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '9')); }}>9</button>
            <button className="p-5 orange" onClick={() => { eventHandler(calculate(obj, 'x')); }}>x</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '4')); }}>4</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '5')); }}>5</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '6')); }}>6</button>
            <button className="p-5 orange" onClick={() => { eventHandler(calculate(obj, '-')); }}>-</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '1')); }}>1</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '2')); }}>2</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '3')); }}>3</button>
            <button className="p-5 orange" onClick={() => { eventHandler(calculate(obj, '+')); }}>+</button>
          </div>
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5 button-2" onClick={() => { eventHandler(calculate(obj, '0')); }}>0</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '.')); }}>.</button>
            <button className="p-5 orange" onClick={() => { eventHandler(calculate(obj, '=')); }}>=</button>
          </div>
        </div>
      </section>
  );
};

export default Calculator;