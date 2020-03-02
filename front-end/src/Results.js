import React, { Component } from 'react';
import "./Home.css"
import qs from 'query-string'
import { Table } from "react-bootstrap"
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Graph extends Component {	
    render(props) {
      const options = {
        title: {
          text: this.props.title
        },
        data: [{				
                  type: "column",
                  dataPoints: this.props.data
         }]
     }
          
     return (
        <div className="box-about">
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }

class Results extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          options: {},
          results: []
        }
        
        this.renderTableData.bind(this)
      }

    
    componentDidMount(){
        const params = qs.parse(this.props.location.search)
        console.log(params)

        const query = `http://localhost:8765/energy/api/${params.table}/${params.country}/PT${params.resolution}N/${params.dmy}/${params.date}`

        // Perform an AjAX Call



        fetch(query,{
            method: 'GET',
            headers: {
                //'X-TOKEN-AUTH': this.context.token,
                'Content-Type':'application/x-www-form-urlencoded',
            }
        }).then((response) => response.json())
        .then(json => {   

            
            
            var returnedValues = []
            for (var i in json.result){
                const obj = {
                    label: json.result[i].DateTimeUTC,
                    y: json.result[i].ActualTotalLoadValue
                }
                returnedValues.push(obj)
            }
                

            this.setState({results: returnedValues })
            this.setState({options: params })
            
            
        });
    
    }

    renderTableData() {
        return this.state.results.map((elem) => {
           const { label, y} = elem //destructuring
           return (
              <tr>
                  <td>{label}</td>
                  <td>{y}</td>
              </tr>
           )
        })
     }


    render(){
        console.log(this.state.options.presentation)
        if(this.state.options.presentation === 'Table'){return (
        <div className="box-about">
            <h1>Results for Greece</h1>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Timestamp</th>
                <th>Total Load</th>
                </tr>
            </thead>
            <tbody>
                {this.renderTableData()}
            </tbody>
            </Table>
        </div>
        )}else{
            return(
                <Graph title = "Placeholder"  data= {this.state.results} />
            )
        }
    }
}

export default Results;