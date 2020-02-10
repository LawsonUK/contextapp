import React, { createContext, Component } from "react"

export const AuthContext = createContext()

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    render() {
        return (<div></div>);
    }
}

export default AuthContextProvider