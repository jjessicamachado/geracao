import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import {thArrayOp} from "variables/Variables.jsx";
import Thumb from "assets/img/thumbdown.png";
import Link from "assets/img/link.png";



class TableList extends Component {
  constructor(){
    super();
    this.state = {
      calls: [],
      callsP: [],
    }
  };

 
  
    componentDidMount() {
      fetch('http://localhost:9080/data/')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({calls: data});
      }) 

      fetch('http://localhost:9080/data/')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({callsP: data});
      }) 
    }


    
  render(){
    function handleClick(id) {
      window.location = "/op/scall/";
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Solicitações Simples"
                category="Atualizado neste instante."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArrayOp.map((prop, key) => {
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
                    <td>{call.status}</td>
                    <td><img src={Thumb} alt="Dedao" class="smallIcon dedao"></img> <button class="iconBtn" onClick={() => handleClick(call.id)}><img src={Link} alt="link" class="smallIcon"></img></button></td>
                    <td></td>
                </tr>
              )
           
           })}
                    </tbody>
                  </Table>
                }
              />
              <Card
                title="Solicitações Complexas"
                category="Atualizado há 1 minuto."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArrayOp.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    
                    <tbody>
                    {this.state.callsP.map(function(call, key) {
             return (
                <tr key = {key}>
                    <td>{call.data}</td>
                    <td>{call.requerente}</td>
                    <td>{call.usina}</td>
                    <td>{call.tags}</td>
                    <td>{call.status}</td>
                    <td><button class="iconBtn" onClick={() => handleClick(call.id)}><img src={Link} alt="link" class="smallIcon"></img></button></td>
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


export default TableList;
