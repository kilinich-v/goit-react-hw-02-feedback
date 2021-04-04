import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Statistics extends Component {
    render() {
        const { statistics, title, stats } = this.props.styles;

        const { good, neutral, bad } = this.props.state;
        const totalFeadback = good + neutral + bad;
        const positiveFeadback = Math.floor(good / (totalFeadback - neutral) * 100);

        return (
            <div className={statistics}>
                <h2 className={title}>Statistics</h2>
                <div className={stats}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {totalFeadback}</p>
                    <p>Positive feedback: {positiveFeadback ? positiveFeadback : 0}%</p>
                </div>
            </div>
        )
    }
}

Statistics.propTypes = {
    state: {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired
    }
}