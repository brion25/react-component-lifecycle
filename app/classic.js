import React from 'react';

const LOGGER = console.log.bind(null,'Component lifecycle Classic - ');

const LifeCycleClassic = React.createClass({
  getInitialState(){
    LOGGER('getInitialState');
    return {
      cycle : 'Initialization'
    };
  },
  getDefaultProps(){
    LOGGER('getDefaultProps');
  },
  componentWillMount(){
    LOGGER('componentWillMount');
  },
  componentDidMount(){
    LOGGER('componentDidMount');
  },
  componentWillReceiveProps(nextProps){
    LOGGER('componentWillReceiveProps');
    this.setState({cycle : 'Updating'})
  },
  shouldComponentUpdate(nextProps, nextState){
    LOGGER('shouldComponentUpdate');
    return this.props.change !== nextProps.change || this.state.cycle !== nextState.cycle;
  },
  componentWillUpdate(nextProps, nextState){
    LOGGER('componentWillUpdate');
  },
  componentDidUpdate(prevProps, prevState){
    LOGGER('componentDidUpdate');
    document.getElementById('classic-div').innerHTML = 'Component Classic Updated';
  },
  componentWillUnmount(){
    LOGGER('componentWillUnmount');
    document.getElementById('classic-div').innerHTML = 'Component Classic Unmounted';
  },
  render(){
    LOGGER('render');
    return (
      <h1>Life Cycle : {this.state.cycle}</h1>
    );
  }
});

export default LifeCycleClassic;
