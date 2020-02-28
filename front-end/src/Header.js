import React from "react"
import {Logout} from "./Auth.js"

class Header extends React.Component{
    render(){
        return (
            <header className="my_header">
                <img src="./logo192.png" alt="Logo" className="header__logo"/>   
            </header>
        )
    }
}

export default Header;


