import React, { Component } from 'react'
import './App.css'
import WorldClock from './Components/WorldClock'
import StopWatch from './Components/StopWatch'
import Alarm from './Components/Alarm'
export default class App extends Component {
  state = {
    worldclock: false,
    stopwatch: false,
    alarm: false,
  }
  globeHandler = () => {
    this.setState((prevstate) => {
      const { worldclock } = prevstate
      return {
        worldclock: !worldclock
      }
    });
    this.setState({ stopwatch: false });
    this.setState({ alarm: false });
  }
  stopwatchHandler = () => {
    this.setState((prevstate) => {
      const { stopwatch } = prevstate
      return {
        stopwatch: !stopwatch
      }
    });
    this.setState({ worldclock: false });
    this.setState({ alarm: false });
    console.log('hello world2');
  }
  alarmHandler = () => {
    this.setState((prevstate) => {
      const { alarm } = prevstate
      return {
        alarm: !alarm
      }
    });
    this.setState({ worldclock: false });
    this.setState({ stopwatch: false });
    console.log('hello world3');
  }
  resetHandler = () => {
    this.setState({ worldclock: false });
    this.setState({ stopwatch: false });
    this.setState({ alarm: false });
  }
  render() {
    const { worldclock, stopwatch, alarm } = this.state
    return (

      <div className='ClockApp-container'>
        <h1 className='heading'>Clock App</h1>
        <div className='gsa-container'>
          <div className='gsa-icons' >
            <i className="bi bi-globe gsa-icon" onClick={this.globeHandler}></i>
            <small>world clock</small>
          </div>

          <div className='gsa-icons'>
            <i className="bi bi-stopwatch gsa-icon" onClick={this.stopwatchHandler}></i>
            <small>stopwatch</small>
          </div>

          <div className='gsa-icons'>
            <i className="bi bi-alarm gsa-icon" onClick={this.alarmHandler}></i>
            <small>alarm</small>
          </div>

          <div className='gsa-icons'>
            <i className="bi bi-arrow-clockwise gsa-icon" onClick={this.resetHandler}></i>
            <small>reset</small>
          </div>

        </div>
        <div className='components-container'>
          {worldclock && <WorldClock />}
          {stopwatch && <StopWatch />}
          {alarm && <Alarm />}
        </div>
      </div>

    )
  }
}
