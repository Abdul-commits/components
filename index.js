import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
    return (new Date()).toLocaleTimeString()
}

const App = () => {
    return (
    <div> 
  
    <label className = "label" htmlFor = "name"> Enter name </label>
    <input  id = "name" type ="text" />
    <button style = {{backgroundColor:'red', color: 'white'}}> submit </button>

    <h2>{getTime()}</h2>
  
  </div>

    );


};


ReactDOM.render( <App />, document.querySelector('#root'));