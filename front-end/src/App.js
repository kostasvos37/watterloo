import React from "react"
import Home from "./Home"
import Header from "./Header"
import Test from "./Test"
import {Login} from "./Auth";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
            <React.Fragment>
                <Header />
                <Switch>
                <Route exact path = "/"><Home/></Route>
                <Route path = "/test"><Test/></Route>
                <Route exact path = "/login"><Login/></Route>
                </Switch>
            </React.Fragment>
            </Router>
        )
    }
}

export default App