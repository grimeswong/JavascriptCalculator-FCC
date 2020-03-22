import React from 'react';
import './styles/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
  }

  componentDidMount() {

  }

  cal(e) {
    console.log(e.target.value);
    console.log(typeof(e.target.value));
    this.setState({
      input: this.state.input + e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>JavaScript Calculator -FCC </h1>
        <div className="container">
          <div className="row">
            <div id="display">
              <p>{this.state.input}</p>
            </div>
          </div>
          <div className="row">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" id="clear" value="AC" onClick={(e)=>this.cal(e)}>AC</button>
              <button type="button" className="btn btn-secondary" id="divide" value="/" onClick={(e)=>this.cal(e)}>÷</button>
              <button type="button" className="btn btn-secondary" id="multiply" value="*" onClick={(e)=>this.cal(e)}><span>*</span></button>
              <button type="button" className="btn btn-dark" id="seven" value="7" onClick={(e)=>this.cal(e)}>7</button>
              <button type="button" className="btn btn-dark" id="eigth" value="8" onClick={(e)=>this.cal(e)}>8</button>
              <button type="button" className="btn btn-dark" id="ninie" value="9" onClick={(e)=>this.cal(e)}>9</button>
              <button type="button" className="btn btn-secondary" id="subtract" value="-" onClick={(e)=>this.cal(e)}>-</button>
              <button type="button" className="btn btn-dark" id="four" value="4" onClick={(e)=>this.cal(e)}>4</button>
              <button type="button" className="btn btn-dark" id="five" value="5" onClick={(e)=>this.cal(e)}>5</button>
              <button type="button" className="btn btn-dark" id="six" value="6" onClick={(e)=>this.cal(e)}>6</button>
              <button type="button" className="btn btn-secondary" id="add" value="+"onClick={(e)=>this.cal(e)}>+</button>
              <button type="button" className="btn btn-dark" id="one" value="1" onClick={(e)=>this.cal(e)}>1</button>
              <button type="button" className="btn btn-dark" id="two" value="2" onClick={(e)=>this.cal(e)}>2</button>
              <button type="button" className="btn btn-dark" id="three" value="3" onClick={(e)=>this.cal(e)}>3</button>
              <button type="button" className="btn btn-primary" id="equals" value="=" onClick={(e)=>this.cal(e)}>=</button>
              <button type="button" className="btn btn-dark" id="zero" value="0" onClick={(e)=>this.cal(e)}>0</button>
              <button type="button" className="btn btn-dark" id="decimal" value="." onClick={(e)=>this.cal(e)}>.</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
