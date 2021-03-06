import React,{ Component } from 'react';

const LOGGER = console.log.bind(null,'Component lifecycle ES6 - ');

class LifeCycleES6 extends Component{
  constructor(props){
    super(props);

    this.state = {
      cycle : 'Initialization'
    }

    LOGGER('getInitialState');
  }

  componentWillMount(){
    LOGGER('componentWillMount');
  }

  componentDidMount(){
    LOGGER('componentDidMount');
  }

  componentWillReceiveProps(nextProps){
    LOGGER('componentWillReceiveProps');
    this.setState({cycle : 'Updating'})
  }

  shouldComponentUpdate(nextProps, nextState){
    LOGGER('shouldComponentUpdate');
    return this.props.change !== nextProps.change || this.state.cycle !== nextState.cycle;
  }

  componentWillUpdate(nextProps, nextState){
    LOGGER('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
    LOGGER('componentDidUpdate');
    document.getElementById('classic-div').innerHTML = 'Component ES6 Updated';
  }

  componentWillUnmount(){
    LOGGER('componentWillUnmount');
    document.getElementById('classic-div').innerHTML = 'Component ES6 Unmounted';
  }

  render(){
    LOGGER('render');
    return (
      <h1>Life Cycle : {this.state.cycle}</h1>
    );
  }
}

export default LifeCycleES6;
