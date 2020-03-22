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
          <div class="btn-group">
            <button type="button" class="btn btn-secondary">AC</button>
            <button type="button" class="btn btn-secondary">AC</button>
            <button type="button" class="btn btn-secondary">÷</button>
            <button type="button" class="btn btn-secondary"><span>*</span></button>
          </div>
        </div>
        <div className="row">
          <div class="btn-group">
            <button type="button" class="btn btn-secondary">7</button>
            <button type="button" class="btn btn-secondary">8</button>
            <button type="button" class="btn btn-secondary">9</button>
            <button type="button" class="btn btn-secondary">-</button>
          </div>
        </div>
        <div className="row">
          <div class="btn-group">
            <button type="button" class="btn btn-secondary">4</button>
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">+</button>
          </div>
        </div>
        <div className="row">
          <div class="btn-group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">=</button>
          </div>
        </div>
        <div className="row">
          <div class="btn-group">
            <button type="button" class="btn btn-secondary">0</button>
            <button type="button" class="btn btn-secondary">0</button>
            <button type="button" class="btn btn-secondary">.</button>
            <button type="button" class="btn btn-secondary">=</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
