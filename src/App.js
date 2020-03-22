import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <h1>JavaScript Calculator -FCC </h1>
      <div className="container">
        <div className="row">
          <div id="display">Display</div>
        </div>
        <div className="row">
          <div className="btn-group">
            <button type="button" className="btn btn-danger" id="clear">AC</button>
            <button type="button" className="btn btn-danger" id="clear">AC</button>
            <button type="button" className="btn btn-secondary" id="divide">÷</button>
            <button type="button" className="btn btn-secondary" id="multiply"><span>*</span></button>
          </div>
        </div>
        <div className="row">
          <div className="btn-group">
            <button type="button" className="btn btn-dark" id="seven">7</button>
            <button type="button" className="btn btn-dark" id="eigth">8</button>
            <button type="button" className="btn btn-dark" id="ninie">9</button>
            <button type="button" className="btn btn-secondary" id="subtract">-</button>
          </div>
        </div>
        <div className="row">
          <div className="btn-group">
            <button type="button" className="btn btn-dark" id="four">4</button>
            <button type="button" className="btn btn-dark" id="five">5</button>
            <button type="button" className="btn btn-dark" id="six">6</button>
            <button type="button" className="btn btn-secondary" id="add">+</button>
          </div>
        </div>
        <div className="row">
          <div className="btn-group">
            <button type="button" className="btn btn-dark" id="one">1</button>
            <button type="button" className="btn btn-dark" id="two">2</button>
            <button type="button" className="btn btn-dark" id="three">3</button>
            <button type="button" className="btn btn-primary" id="equals">=</button>
          </div>
        </div>
        <div className="row">
          <div className="btn-group">
            <button type="button" className="btn btn-dark" id="zero">0</button>
            <button type="button" className="btn btn-dark" id="zero">0</button>
            <button type="button" className="btn btn-dark" id="decimal">.</button>
            <button type="button" className="btn btn-primary" id="equals">=</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
