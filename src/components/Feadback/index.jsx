import { Component } from 'react'
import Statistics from './Statistics'
import styles from './styles.module.scss'

export default class Feadback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleFeadback = event => {
        const { name } = event.currentTarget;

        this.setState(prevState => {
            return { [name]: prevState[name] + 1 };
        })
    }

    render() {
        const { feadback, title, buttons, button } = styles;

        return (
            <div className={feadback}>
                <h2 className={title}>Please leave feedback</h2>
                <div className={buttons}>
                    <button name="good" className={button} onClick={this.handleFeadback}>Good</button>
                    <button name="neutral" className={button} onClick={this.handleFeadback}>Neutral</button>
                    <button name="bad" className={button} onClick={this.handleFeadback}>Bad</button>
                </div>
                <Statistics state={this.state} styles={styles} />
            </div>
        )
    }
}
