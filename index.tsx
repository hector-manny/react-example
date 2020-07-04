import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


let nombre = 'hector';

function Micomponente(){
  return <p>hello React</p>;
}

class Micomponentedeclase extends Component{
  render (){
    return <p> hola soy de la clase</p>;
  }
}
class App extends Component{
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <Micomponente />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
