import React from "react"
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
class SearchView extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
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


        console.log(`Country = ${country}  || Date = ${date}  ||    Table = ${table}  ||  
        Resolution = ${resolution}  ||  Presentation = ${presention}
        `)
    }
    render(){
        return (
            
        <div className="booking-form-box">
        <form className="booking-form" onSubmit = {this.handleSubmit}>
        <label>Country</label>
        <input type="text" className="form-control" required = "required" placeholder="Select country" name = "country"/>
        
        
        <label>Year/Month/Day</label>
        <input type="text" placeholder = "YYYY-MM-DD" required = "required" className="form-control select-date" name = "date" />

        
        <div className="input-grp">
        <label>Actual Resolution</label>
        <select className="custom-select" name = "resolution">
            <option>15</option>
            <option>30</option>
            <option>60</option>
            </select>
            </div>
      
            <div className="input-grp">
            <label>Actual</label>
            <select className="custom-select" name = "table">
                <option>ActualTotalLoad</option>
                <option>DayAheadTotalLoadForecast</option>
                <option>AggregatedGenerationPerType</option>
            </select>
            </div>
          
          
            
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

export default SearchView;
