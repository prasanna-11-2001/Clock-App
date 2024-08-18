import React, { Component } from 'react'
import './WorldClock.css'
export default class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);

    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const { date } = this.state
        return (
            <div>
                {/* <p className='timeformatted'> {date.toTimeString().split(' ')[0].substring(0, 8)}</p> */}
                <p className='timeformatted'>{date.toLocaleTimeString()}
                </p>
            </div>
        )
    }
}
