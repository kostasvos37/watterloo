import React from "react"

class Header extends React.Component{
    render(){
        return (
            <React.Fragment>
            <h1>WattErloo</h1>
                <h2>National Technical University of Athens</h2>
                <nav>
                    <ul>
                    <li align="right"><a href="#ΗΟΜΕ" className="active">ΗΟΜΕ</a></li>
                    <li>
                        <a href="#books">• Actual Total Load</a>
                    </li>
                    <li><a href="#categories">• Day Ahead Total Load Forecast</a>
                    </li>
                    <li>
                        <a href="#athors">• Aggregated Generation Per Type</a>
                    
                    </li>
                </ul>
		    </nav>
        </React.Fragment>
        )
    }
}

export default Header;


