import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    contador: 0
  };
  /*
  Add = () => {
    if (this.state.contador < 10) {
      this.setState({
        contador: this.state.contador + 1
      });
    }
  };

  remove = () => {
    if(this.state.contador > 0 )
    this.setState({
      contador: this.state.contador - 1
    });
  };
*/
  Add = () => {
    this.setState({
      contador:
        this.state.contador < 10
          ? this.state.contador + 1
          : this.state.contador + 0,
          body: (document.body.style.backgroundColor = "yellow")
    });
  };

  remove = () => {
    this.setState({
      contador:
        this.state.contador > 0
          ? this.state.contador - 1
          : this.state.contador + 0,
          body: (document.body.style.backgroundColor = "red")
    });
  };

  render() {
    return (
      <div className="contador">
        <h1>Contador </h1>
        <button onClick={this.Add}>+</button>
        <h1>{this.state.contador}</h1>
        <button onClick={this.remove}>-</button>
      </div>
    );
  }
}

export default App;