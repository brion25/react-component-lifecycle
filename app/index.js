import React, { Component } from 'react'
import { render } from 'react-dom'

import ES6 from './es6';

const DOM_APP = document.getElementById('app');

class Root extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ES6 />
    );
  }
};

render(<Root />, DOM_APP);
