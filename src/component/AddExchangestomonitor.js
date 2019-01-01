
import React, { Component } from 'react';
import db from "./firebase";

class AddExchangeToMonitor extends Component{
    constructor(){
        super();
        this.state = {
          exchange:'',
          ethadd:'sdfs'
        };
    
      this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        //alert('An essay was submitted: ' + this.state.exchange);

        event.preventDefault();
        this.addthedata(this.state.exchange,this.state.ethadd,0)
      }
    
    addthedata(exchange,ethaddress,vl){
        
        db.collection('ExchangesToMonitor').add({
            exchange: exchange,
            ethaddress: ethaddress,
            totaleth:vl,
            Approved:'N',
            dt:new Date()
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
        
       
    
}

render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          ExchangeName
          
        </label>
        <input type="text" name="exchange" 
        value={this.state.exchange} 
        onChange={this.handleChange}></input>
        </div>

        <div>
        <label>
          Ethereum Address
          
        </label>
        <input type="text" name="ethadd" 
        value={this.state.ethadd}
         onChange={this.handleChange}></input>
        </div>

       
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddExchangeToMonitor;