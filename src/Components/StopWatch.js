import React, { Component } from 'react'
import './StopWatch.css'
export default class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0,
            isRunning: false
        }
    }
    startstopwatch = () => {
        if (!this.state.isRunning) {
            this.setState({ isRunning: true })
        }

        this.timer = setInterval(() => {
            this.setState(
                (prevstate) => ({
                    elapsedTime: prevstate.elapsedTime + 11
                })
            )
        }, 10)
    }
    stopstopwatch = () => {
        if (this.state.isRunning) {
            this.setState({ isRunning: false })
            clearInterval(this.timer)
        }
    }
    resetstopwatch = () => {
        this.setState({ elapsedTime: 0 })
        if (this.state.isRunning) {
            this.setState({ isRunning: false })
            clearInterval(this.timer)
        }
    }
    formattedTime = (elapsedTime) => {
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        return `${this.padtime(minutes)}:${this.padtime(seconds)}:${this.padtime(milliseconds)}`
    }
    padtime = (value, length = 2) => {
        return value.toString().padStart(length, '0');
    }
    render() {
        const { elapsedTime } = this.state
        return (
            <div className='stopwatch-container'>
                <div className='elapsedTime'>{this.formattedTime(elapsedTime)}</div>
                <button className='button' onClick={this.startstopwatch}>Start</button>
                <button className='button' onClick={this.stopstopwatch}>Stop</button>
                <button className='button' onClick={this.resetstopwatch}>Reset</button>
            </div>
        )
    }
}
