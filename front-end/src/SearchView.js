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
    render(){
        return (
            
        <div className="booking-form-box">
        <div className="radio-btn">
        <input type="radio" className="btn" name="check"/><span>Table</span>
        <input type="radio" className="btn" name="check"/><span>Graph</span>
        
        </div>
        
        <div className="booking-form">
        <label>Country</label>
        <input type="text" className="form-control" placeholder="Select country"/>
        
        <div className="input-grp">
        <label>Date From</label>
        <input type="date" className="form-control select-date" />
        </div>
        
        <div className="input-grp">
        <label>Until</label>
        <input type="date" className="form-control select-date" />
        </div>
        
        <div className="input-grp">
        <label>Actual Resolution</label>
        <select className="custom-select">
            <option value="1">15</option>
            <option value="2">30</option>
            <option value="3">60</option>
            </select>
            </div>
            
            <div className="input-grp">
            <label>Actual</label>
            <select className="custom-select">
                <option>ActualTotalLoad</option>
                <option>DayAheadTotalLoadForecast</option>
                <option>AggregatedGenerationPerType</option>
            </select>
            </div>
            
            <div className="input-grp">
                <button type="button" className="btn btn-primary flight">Show Results</button>
            </div>
        </div>
        </div>
        )
    }
}

export default SearchView;
