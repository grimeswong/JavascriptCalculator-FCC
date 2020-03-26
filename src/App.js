import React from 'react';
import './styles/main.scss';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      decimal: false
    }
    this.num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    this.oper = ["*", "/", "+", "-"];
  }

  componentDidMount() {

  }

  // This function for analyse the input of typing
  analyse = (e) => {
    console.log(e.target.value);
    const state = this.state.input;
    const curVal = e.target.value;
    if(curVal === "AC") {
      this.clear()
    } else if (this.num.includes(curVal)) {
      if(state.length === 1 && state[state.length-1] === "0" && curVal !== ".") {  // if the string leading by "0",
        // remove leading 0
        console.log('remove leading zero');
        this.setState({input: "".concat(curVal)});
      } else if(curVal === ".") { // will not concate decimal sign
        if(this.state.decimal===false) {
          this.setState({
            input: state.concat(curVal),
            decimal: true
          })
        }
      } else {
        console.log('concate string')
        this.setState({input: state.concat(curVal)});
      }

    } else if (this.oper.includes(curVal)) { // if operator is clicked
      console.log("operator is clicked")
      this.setState({decimal: false}) // reset decimal flag
      if(this.num.includes(state[state.length-1])) {  // add an operator after a number
        console.log('add operator after numbers')
        this.setState({input: state.concat(curVal)});
      }

      if(this.oper.includes(state[state.length-1]) && curVal !== "-" && this.oper.includes(state[state.length-2]) !== true ) { // replace the old operator by the current one except minus sign
        console.log('update operator after numbers')
        this.setState({input: state.substring(0, state.length-1).concat(curVal)});
      }

      if(curVal === "-" && state[state.length-1] !== "-" ) {  // add negative sign after an operator except minus
        console.log('add minus sign')
        this.setState({input: state.concat(curVal)});
      }

    } else {  // clicked other button or other situation

    }

  }

  calculate = () => {
    console.log("Equals is clicked")
    console.log("Calculator the formula")
    this.setState({
      input: eval(this.state.input).toString()
    })
  }

  clear() {
    this.setState({
      input: "0",
      decimal: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>JavaScript Calculator -FCC </h1>
        <div className="container">
          <div className="row">
            <div id="display">
              {this.state.input}
            </div>
          </div>
          <div className="row">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" id="clear" value="AC" onClick={(e)=>this.analyse(e)}>AC</button>
              <button type="button" className="btn btn-secondary" id="divide" value="/" onClick={(e)=>this.analyse(e)}>÷</button>
              <button type="button" className="btn btn-secondary" id="multiply" value="*" onClick={(e)=>this.analyse(e)}><span>x</span></button>
              <button type="button" className="btn btn-dark" id="seven" value="7" onClick={(e)=>this.analyse(e)}>7</button>
              <button type="button" className="btn btn-dark" id="eight" value="8" onClick={(e)=>this.analyse(e)}>8</button>
              <button type="button" className="btn btn-dark" id="nine" value="9" onClick={(e)=>this.analyse(e)}>9</button>
              <button type="button" className="btn btn-secondary" id="subtract" value="-" onClick={(e)=>this.analyse(e)}>-</button>
              <button type="button" className="btn btn-dark" id="four" value="4" onClick={(e)=>this.analyse(e)}>4</button>
              <button type="button" className="btn btn-dark" id="five" value="5" onClick={(e)=>this.analyse(e)}>5</button>
              <button type="button" className="btn btn-dark" id="six" value="6" onClick={(e)=>this.analyse(e)}>6</button>
              <button type="button" className="btn btn-secondary" id="add" value="+"onClick={(e)=>this.analyse(e)}>+</button>
              <button type="button" className="btn btn-dark" id="one" value="1" onClick={(e)=>this.analyse(e)}>1</button>
              <button type="button" className="btn btn-dark" id="two" value="2" onClick={(e)=>this.analyse(e)}>2</button>
              <button type="button" className="btn btn-dark" id="three" value="3" onClick={(e)=>this.analyse(e)}>3</button>
              <button type="button" className="btn btn-primary" id="equals" value="=" onClick={(e)=>this.calculate(e)}>=</button>
              <button type="button" className="btn btn-dark" id="zero" value="0" onClick={(e)=>this.analyse(e)}>0</button>
              <button type="button" className="btn btn-dark" id="decimal" value="." onClick={(e)=>this.analyse(e)}>.</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
