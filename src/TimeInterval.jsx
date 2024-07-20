import React, { Component } from 'react';

class TimeInterval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null, 
    };
  }

  componentDidMount() {
    this.setState({ startTime: new Date().getTime() });
  }

  render() {
    const { startTime } = this.state;

   
    const elapsedTime = startTime ? Math.floor((new Date().getTime() - startTime) / 1000) : 0;

    return (
      <div>
      
        <p>Time since last mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default TimeInterval;
