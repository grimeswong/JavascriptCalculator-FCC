import React from 'react';
import './styles/main.scss';



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      input: "0"
    }
    this.num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    this.oper = ["*", "/", "+", "-"];
    this.equals = ["="];
  }

  componentDidMount() {

  }

  // This function for analyse the input of typing
  analyse = (e) => {
    console.log(e.target.value);
    if(e.target.value === "AC") {
      this.clear()
    } else if (this.num.includes(e.target.value) && this.state.input.length < 12) { // limit to 12 digits
      if(this.state.input.length === 1 && this.state.input[this.state.input.length-1] === "0" && e.target.value !== ".") {  // if the string leading by "0",
        // remove leading 0
        console.log('remove leading zero');
        this.setState({input: "".concat(e.target.value)});
        console.log(this.state.input);
      } else {
        console.log('concate string')
        this.setState({input: this.state.input.concat(e.target.value)});
      }


    } else {

    }

  }

  calulate = () => {

  }

  clear() {
    this.setState({
      input: "0"
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
              <button type="button" className="btn btn-danger" id="clear" value="AC" onClick={(e)=>this.analyse(e)}>AC</button>
              <button type="button" className="btn btn-secondary" id="divide" value="/" onClick={(e)=>this.analyse(e)}>÷</button>
              <button type="button" className="btn btn-secondary" id="multiply" value="*" onClick={(e)=>this.analyse(e)}><span>*</span></button>
              <button type="button" className="btn btn-dark" id="seven" value="7" onClick={(e)=>this.analyse(e)}>7</button>
              <button type="button" className="btn btn-dark" id="eigth" value="8" onClick={(e)=>this.analyse(e)}>8</button>
              <button type="button" className="btn btn-dark" id="ninie" value="9" onClick={(e)=>this.analyse(e)}>9</button>
              <button type="button" className="btn btn-secondary" id="subtract" value="-" onClick={(e)=>this.analyse(e)}>-</button>
              <button type="button" className="btn btn-dark" id="four" value="4" onClick={(e)=>this.analyse(e)}>4</button>
              <button type="button" className="btn btn-dark" id="five" value="5" onClick={(e)=>this.analyse(e)}>5</button>
              <button type="button" className="btn btn-dark" id="six" value="6" onClick={(e)=>this.analyse(e)}>6</button>
              <button type="button" className="btn btn-secondary" id="add" value="+"onClick={(e)=>this.analyse(e)}>+</button>
              <button type="button" className="btn btn-dark" id="one" value="1" onClick={(e)=>this.analyse(e)}>1</button>
              <button type="button" className="btn btn-dark" id="two" value="2" onClick={(e)=>this.analyse(e)}>2</button>
              <button type="button" className="btn btn-dark" id="three" value="3" onClick={(e)=>this.analyse(e)}>3</button>
              <button type="button" className="btn btn-primary" id="equals" value="=" onClick={(e)=>this.calulate}>=</button>
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
