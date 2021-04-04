import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export class FeedbackOptions extends Component {
    static propTypes = {

    }

    render() {
        const { options, handleFeadback } = this.props;
        const { button } = styles;

        return (
            options.map(key => {
                return (<button name={key} className={button} onClick={handleFeadback}>{key[0].toUpperCase() + key.slice(1)}</button>)
            })
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    handleFeadback: PropTypes.func.isRequired
}

export default FeedbackOptions
