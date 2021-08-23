import React, { useState } from 'react';
import calculate from '../logic/calculate';
import updateObject from '../logic/update';

const Calculator = () => {
  const [stotal, setTotal] = useState('');
  const [soperation, setOperation] = useState('');
  const [snext, setNext] = useState('');

  const obj = {
    total: stotal,
    next: snext,
    operation: soperation,
  };
  const eventHandler = (newState) => {
    console.log(newState);

    const eventhere = updateObject(obj, newState);
    setNext(eventhere.next);
    setOperation(eventhere.operation);
    setTotal(eventhere.total);
  };
  return (
      <section className="container w-50">
            <p className="text-center">Lets do some Math!</p>
        <div className="result">
          <p className=" p-4 text-right">{stotal}  { ' ' }
            { soperation }
            { ' ' }
            { snext }
</p>
        </div>
        <div className="calculator d-flex flex-column">
          <div className="calc-row d-flex align-content-stretch">
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, 'AC')); }}>AC</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '+/-')); }}>+/-</button>
            <button className="p-5" onClick={() => { eventHandler(calculate(obj, '%')); }}>%</button>
            <button className="p-5 orange" onClick={() => { eventHandler(calculate(obj, '÷')); }}>÷</button>
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