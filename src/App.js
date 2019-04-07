import React, { Component } from 'react';
import './App.css'
import  { connect } from 'react-redux'
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <h1>A: </h1><span>{this.props.a}</span>
            <button onClick={this.props.updateA}>Update A</button>
          </div>
          <div className="col">
          <div >
            <h1>B: </h1><span>{this.props.b}</span>
            <button onClick={this.props.updateB}>Update A</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => {
  return {
    a:store.a,
    b:store.b
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateA:()=>dispatch ({type:'UPDATE_A'}),
    updateB:()=>dispatch ({type:'UPDATE_B'})
  }
}

export default connect(mapStoreToProps,mapDispatchToProps)(App);
