import React from "react"
import Map from "./Map.js"
import SearchView from "./SearchView.js"
class Home extends React.Component{
    render(){
        return (
            <div className = "grid_container">
                    <SearchView/>
                    <Map/>
            </div>
        )
    }
}

export default Home;