import React, { Component } from 'react';
import db from "./firebase";

const url="https://api.etherscan.io/api?module=account&action=balance&address=0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE&tag=latest&apikey=D4V3HJ75MGT79F39BBPV8A25MQ7EWRSBZD";   
class BinanceEtherdata extends Component{
    
    constructor(){
        super();
        this.state={
            amount:1
        }
        
    }
    
 componentDidMount(){
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res=> res.json())       
    .then(dd=>{
        this.setState({amount:Math.floor(dd.result/1000000000000000000)})
        console.log(dd);
        this.addthedata(Math.floor(dd.result/1000000000000000000))
        
    })   
    
 }
render(){

    return(<div>hello world  {this.state.amount}</div>)
}

    
    
addthedata(vl){
    db.collection("binance_eth1").add({
        exchange: "binance",
        ethaddress: "0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE",
        totaleth:vl,
        dt:new Date()
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
    
   
}

}

export default BinanceEtherdata;