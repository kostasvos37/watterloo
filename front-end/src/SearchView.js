import React, { Component } from 'react';
import { withRouter } from "react-router";
import "./forms.css"
/*
var countries     = ['Greece', 'Spain', 'Hungary', 'United Kingdom', 'Ireland', 'Sweden'],
            MakeItem = function(X) {
                return <option>{X}</option>;
        };
var arrayOptions     = ['ActualDataLoad', 'DayAheadForecast', 'AggregateProductionByType'],
        MakeItem = function(X) {
            return <option>{X}</option>;
    };

    var resolutions     = ['15', '30', '60'],
        MakeItem = function(X) {
            return <option>{X}</option>;
    };
    */

const MakeItem = function(X) {
    return <option>{X}</option>;
};


class Text extends Component{    
    render(){
        return(
            <React.Fragment>
                <label>{this.props.label}</label>
                <input type="text" className="form-control" required = "required" placeholder={this.props.placeholder} name = {this.props.name}/>
            </React.Fragment>
        )}
}


class Select extends Component{    

    render(){

        return(
            <div className="input-grp">
            <label>{this.props.label}</label>
            <select className="custom-select" name ={this.props.name}>
                {this.props.options.map(MakeItem)}
            </select>
        </div>
        )}
}



class SearchView extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(event)
        event.preventDefault()
        var form = event.target.elements
        const country = form.country.value
        const date = form.date.value
        const table = form.table.value
        const resolution = form.resolution.value
        const presention = form.check.value


        var dmy = ""
        var errorMsg = ""
        const len = date.length
        if(len === 4){
            // YYYY correct
            dmy = "year"
        }else if(len === 7){
            dmy = "month"
        }
        else if(len === 10){
            dmy = "day"
        }else {
            errorMsg = "Wrong Date format!"
            alert(errorMsg)
            return
        }

        const searchURL = `?country=${country}?date=${date}?table=${table}?resolution=${resolution}?presentation=${presention}`
        this.props.history.push({
            pathname: '/res',
            search: searchURL
          })



        console.log(`Country = ${country}  || Date = ${date}  ||    Table = ${table}  ||  
        Resolution = ${resolution}  ||  Presentation = ${presention}
        `)

    }


    render(){
        return (
            
        <div className="booking-form-box">
        <form className="booking-form" onSubmit = {this.handleSubmit}>

        <Text label = "Country" placeholder="Select country" name = "country"/>
        
        <Text label = "Year/Month/Day" placeholder="YYYY-MM-DD" name = "date"/>
        
        <Select label = "Resolution" name = "resolution" options = {["15", "30", "60"]} />
      
        <Select label = "Table" name = "table" options = {["ActualTotalLoad", "DayAheadTotalLoadForecast", "AggregatedGenerationPerType"]}/>
          
        <div className="radio-btn">
        <input type="radio" className="btn" name="check" value = "Table" checked onChange = {() => {}}/><span>Table</span>
        <input type="radio" className="btn" name="check" value = "Graph"/><span>Graph</span>
        
        </div>

        <div className="input-grp">
                <button type="submit" className="btn btn-primary flight">Show Results</button>
            </div>

            
        </form>
        </div>
        )
    }
}

export default withRouter(SearchView);
