import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() {
        const { ThemeToggle } = this.context
        return (
            <button onClick={toggleTheme}>Toggle the theme</button>
        )
    }
}
