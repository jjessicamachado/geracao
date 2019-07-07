import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray} from "variables/Variables.jsx";

class Log extends Component {
  constructor(){
    super();
    this.state = {
      calls: [],
    }
  };
    componentDidMount() {
      fetch('http://localhost:9080/data/')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({calls: data});
      }) 
    }
    
  render(){
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Histórico"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    
                    <tbody>
                    {this.state.calls.map(function(call, key) {
             
             return (
                <tr key = {key}>
                    <td>{call.data}</td>
                    <td>{call.requerente}</td>
                    <td>{call.usina}</td>
                    <td>{call.tags}</td>
                    <td>{call.complexidade}</td>
                    <td>{call.status}</td>
                </tr>
              )
           
           })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Log;
