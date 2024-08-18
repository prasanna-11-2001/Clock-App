import React, { Component } from 'react'
import './Alarm.css'
export default class Alarm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date(),
            alarmTime: '',
            isAlarmset: false,
            isAlarmTriggred: false
        }
    }
    componentDidMount() {
        this.timer = setInterval(this.tick, 1000)
    }
    tick = () => {
        this.setState({ currentTime: new Date() })
        if (this.state.isAlarmset) {
            this.checkAlarm()
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    changeHandler = (e) => {
        this.setState({ alarmTime: e.target.value });
    }
    setAlarm = () => {
        if (this.state.alarmTime) {
            this.setState({ isAlarmset: true, isAlarmTriggred: false })
        }
    }
    stopAlarm = () => {
        this.setState({ isAlarmset: false, isAlarmTriggred: false })
    }
    checkAlarm = () => {
        const { currentTime, alarmTime } = this.state
        const formattedTime = currentTime.toTimeString().split(' ')[0].substring(0, 5);
        if (formattedTime === alarmTime) {
            this.setState({ isAlarmTriggred: true })
            alert('alarm triggred')
            this.stopAlarm();
        }
    }
    render() {
        const { currentTime, alarmTime } = this.state
        return (
            <div className='alarm'>
                <div className='formattedtime'>Current Time:{currentTime.toTimeString().split(' ')[0].substring(0, 8)}</div>
                <input type='time' value={alarmTime} onChange={this.changeHandler} className='buttons' />
                <button className='buttons' onClick={this.setAlarm}>Set Alarm</button>
                <button className='buttons' onClick={this.stopAlarm}>Stop Alarm</button>
            </div>
        )
    }
}
