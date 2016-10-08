import React, { Component } from 'react'
import { render } from 'react-dom'

import ES6 from './es6';
import CLASSIC from './classic';

const DOM_APP = document.getElementById('app');

class Root extends Component{
  constructor(props){
    super(props);

    this.state = {
      lifecycle : '',
      change : 0
    };
  }

  render(){
    let self = this,
        lifecycle = null;

    if(this.state.lifecycle === 'es6') lifecycle = <ES6 change={self.state.change}  />
    else if(this.state.lifecycle === 'classic') lifecycle = <CLASSIC change={self.state.change}  />;

    return (
      <div>
        <div className="row">
          <div className="col-xs-3 text-center">
            <div className="btn-group-vertical">
              <button type="button" className="btn btn-default" onClick={() => {
                self.setState({ lifecycle : 'classic' });
                setTimeout(() => {
                  self.setState({ change : self.state.change++ });
                },3000);
              }}> Classic </button>
              <button type="button" className="btn btn-default" onClick={() => {
                self.setState({ lifecycle : 'es6' });
                setTimeout(() => {
                  self.setState({ change : self.state.change++ });
                },3000);
              }}> ES6 </button>
              <button type="button" className="btn btn-default" onClick={() => {
                self.setState({ lifecycle : null });
              }}> None </button>
            </div>
          </div>
          <div className="col-xs-9">
            <div className="panel">
              <div className="panel-body">
                {lifecycle}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-xs-12 text-center bg-info">
            Open the Web tools to see the changes among methods
          </div>
        </div>
      </div>
    );
    if(!remove) return ;
    else return <h1>Component lifecycle finished</h1>
  }
};

function renderDom(){
  render(<Root />, DOM_APP);
}

renderDom();
