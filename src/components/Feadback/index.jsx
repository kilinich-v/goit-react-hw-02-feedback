import { Component } from 'react'
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
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
        const { feadback, title, buttons } = styles;

        return (
            <div className={feadback}>
                <h2 className={title}>Please leave feedback</h2>
                <div className={buttons}>
                    <FeedbackOptions options={Object.keys(this.state)} handleFeadback={this.handleFeadback} />
                </div>
                <Statistics state={this.state} styles={styles} />
            </div>
        )
    }
}
