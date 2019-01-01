import React, { Component } from 'react';
import db from "./firebase";




class AddEthereumAddress extends Component{
    constructor(){
        super();

        this.setState={
            totaleth:0
        }
    }

    componentDidMount(){

        db.collection('ExchangesToMonitor').get()
        .then(res=>{
            res.docs.forEach(kk=>{
                this.FetchdataFromurl(kk.data().exchange,kk.data().ethaddress)
            })
        })

        //binance eth1
        /*
        ETHERADDRESS="0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE";
        url="https://api.etherscan.io/api?module=account&action=balance&address=" + ETHERADDRESS + "&tag=latest&apikey=D4V3HJ75MGT79F39BBPV8A25MQ7EWRSBZD";           

        this.FetchdataFromurl('binance_eth1',url,ETHERADDRESS);



        ETHERADDRESS="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        url="https://api.etherscan.io/api?module=account&action=balance&address=" + ETHERADDRESS + "&tag=latest&apikey=D4V3HJ75MGT79F39BBPV8A25MQ7EWRSBZD";           
        this.FetchdataFromurl('bitrex_eth1',url,ETHERADDRESS)
        //const lastexchangeeth=db.collection('lastexchangeeth')
        
        
        ETHERADDRESS= "0xE853c56864A2ebe4576a807D26Fdc4A0adA51919";
        url="https://api.etherscan.io/api?module=account&action=balance&address=" + ETHERADDRESS + "&tag=latest&apikey=D4V3HJ75MGT79F39BBPV8A25MQ7EWRSBZD"; 
        this.FetchdataFromurl('Kraken_eth3',url, ETHERADDRESS)
        //console.log(url); 
        
        ETHERADDRESS= "0x32Be343B94f860124dC4fEe278FDCBD38C102D88";
        url="https://api.etherscan.io/api?module=account&action=balance&address=" + ETHERADDRESS + "&tag=latest&apikey=D4V3HJ75MGT79F39BBPV8A25MQ7EWRSBZD";   

        this.FetchdataFromurl('poloniex_1',url, ETHERADDRESS)
         

      
        */

    
        
    }
    
    FetchdataFromurl(exchangename,eth){
        //console.log(uri);
       let url="https://api.etherscan.io/api?module=account&action=balance&address=" + eth + "&tag=latest&apikey=D4V3HJ75MGT79F39BBPV8A25MQ7EWRSBZD"; 
        console.log(url)
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            }
            })
            .then(res=> res.json())       
            .then(dd=>{
            //this.setState({amount:Math.floor(dd.result/1000000000000000000)})
            console.log(dd);
            this.addthedata(exchangename,eth, Math.floor(dd.result/1000000000000000000))
            
        })
    }
    
    addthedata(exchange,ethaddress,vl){
        db.collection(exchange).add({
            exchange: exchange,
            ethaddress: ethaddress,
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
     


    render() {
        return (
         <div>
             <h1>hello world </h1>
         </div>
        );
      }
    }

export default AddEthereumAddress;