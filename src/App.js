import React, { Component } from 'react';
import './App.css';
import data from './data'
import {connect} from 'react-redux'
import store from './store';
import ModelDetails from './component/ModelDetails'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      data
    }
  }
  updateSelection = (e) =>{
      const {value} = e.target;
      this.setState({
        data,
        value
      })
  }

  handleevent = (e) => {
    const val = this.state.value;
    const details = this.state.data.find(computer => computer.name === val)
     const action ={
       type:'ADD_VALUE',
       payload: details
     }

    store.dispatch(action);     

  }

  render() {
    return (
      <div className="App">
        {
          [...this.props.newdata].map(data => {
            return <ModelDetails 
              name={data.name}
              manufacturer={data.manufacturer}
              year={data.year}
              origin={data.origin}
            />
          })
        }
         <select onChange={this.updateSelection}>
           <option value="">---pick a model</option>
            {this.state.data.map((data,i)=>{
             return <option key={i} value={data.name}>
               {data.name} ({data.year})
             </option>
           })}
         </select>
         <button onClick={this.handleevent}>Add</button>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     newdata: state
  }
}

export default connect(mapStateToProps)(App)