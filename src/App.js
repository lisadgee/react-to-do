import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

// class ToDo extends Component {
//     render() {
//       return (
//         <li> A todo will go here </li>
//       );
//     }
// }
//export default ToDo;


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
          </ul>
      </div>
    );
  }
}

export default App;
