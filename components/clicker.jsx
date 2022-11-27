import React from "react";

class Clickme extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      count: 0 
    };

    //increase
    this.increase = this.increase.bind(this);
    //reduce
    this.reduce = this.reduce.bind(this);
  }
  // method for increasing the count by 1
  increase() {
    this.state.count = this.state.count + 1;
    this.forceUpdate();
  }
  // method for increasing the count by 1
  reduce() {
    this.state.count = this.state.count + -1;
    this.forceUpdate();
  }

  render() {
    return (
      //clicker div
      <div style={{hight:800}}>
      <div style={{width: 250, border: 'solid', borderRadius: 8, fontFamily: "Courier New", fontSize: 42,textAlign: 'center', margin: "auto"}}>

        <h1 style={{fontFamily: "Courier New", fontSize: 24}}> Opvia Clicker!</h1>

        <div style={{ backgroundColor: "white", height: 200}}>
          <div style={{backgroundColor: "orange", height: 60, border: 'inset', borderRadius: 8,marginLeft:5,marginRight:5}}>{this.state.count}</div>
         
          <button style={{backgroundColor: "green", height: 90, width: 90, marginRight:10, marginTop:25, borderRadius: 8}} onClick={this.increase}>+</button>

          <button style={{backgroundColor: "red",  height: 90, width: 90, marginLeft:10,marginTop:25, borderRadius: 8}}onClick={this.reduce}>-</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Clickme;
