import React from "react"
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
            <div className = "container">
            <form className = "searchForm">
                <div className="form-group-lg">
                    <label htmlFor="countryFormControlSelect1">Select Country</label>
                    <select className="form-control" id="countryFormControlSelect1">
                    <option>Greece</option>
                    <option>Spain</option>
                    <option>United Kingdom</option>
                    <option>France</option>
                    </select>
                </div>
                
                <div className="form-group row">

                    <label htmlFor="date" className="col-2 col-form-label">Date From</label>
                    <div className="col-10">
                        <input className="form-control" type="date" id="date"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="date2" className="col-2 col-form-label">Date Until</label>
                    <div className="col-10">
                        <input className="form-control" type="date" id="date2"/>
                    </div>
                </div>
                <div className="form-group-lg">
                    <label htmlFor="arrays">Select Table</label>
                    <select className="form-control" id="arrays">
                    <option>Actual</option>
                    <option>Forecast</option>
                    <option>Type</option>

                    </select>
                </div>

                <div className="form-group-lg">
                    <label htmlFor="res">Select Resolution</label>
                    <select className="form-control" id="res">
                    <option>15</option>
                    <option>30</option>
                    <option>60</option>

                    </select>
                </div>


                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Graph</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Table</label>
                </div>
                <div className="form-group-lg">

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default SearchView;

