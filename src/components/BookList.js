import React, { Component } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => {
          const { isLightTheme, light, dark } = themeContext
          const theme = isLightTheme ? light : dark
          return (
            <div
              className="book-list"
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>The Way of Kings</li>
                <li style={{ background: theme.ui }}>The Name of the Wind</li>
                <li style={{ background: theme.ui }}>The Final Empire</li>
              </ul>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default BookList
