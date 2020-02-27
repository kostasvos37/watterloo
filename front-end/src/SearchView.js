import React from "react"

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
class SearchView extends React.Component{
    render(){
        return (
            <form classNameName = "searchForm">
                <div className="form-group-lg">
                    <label htmlFor="countryFormControlSelect1">Select Country</label>
                    <select class="form-control" id="countryFormControlSelect1">
                    {countries.map(MakeItem)}
                    </select>
                </div>
                
                <div className="form-group row">

                    <label for="date" className="col-2 col-form-label">Date From</label>
                    <div className="col-10">
                        <input className="form-control" type="date" id="date"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="date2" className="col-2 col-form-label">Date Until</label>
                    <div className="col-10">
                        <input className="form-control" type="date" id="date2"/>
                    </div>
                </div>
                <div className="form-group-lg">
                    <label htmlFor="arrays">Select Table</label>
                    <select class="form-control" id="arrays">
                    {arrayOptions.map(MakeItem)}
                    </select>
                </div>

                <div className="form-group-lg">
                    <label htmlFor="res">Select Resolution</label>
                    <select class="form-control" id="res">
                    {resolutions.map(MakeItem)}
                    </select>
                </div>


                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" for="inlineRadio1">Graph</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" for="inlineRadio2">Table</label>
                </div>
                <div className="form-group-lg">

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
        )
    }
}

export default SearchView;

