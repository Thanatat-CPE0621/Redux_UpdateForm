import React, { Component } from 'react';
import './App.css'
import  { connect } from 'react-redux'
import { update_A,update_B} from "./actions/index"
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <h1>A: </h1><span>{this.props.Reducer.a}</span>
            <button onClick={this.props.updateA}>Update A</button>
          </div>
          <div className="col">
          <div >
            <h1>B: </h1><span>{this.props.Reducer.b}</span>
            <button onClick={this.props.updateB}>Update A</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Reducer:state.Reducer

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      update_A:value => dispatch(update_A(value)),
      update_B:value => dispatch(update_B(value))
    // updateA:()=>dispatch ({type:'UPDATE_A'}),
    // updateB:()=>dispatch ({type:'UPDATE_B'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
