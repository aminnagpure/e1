import React, { Component } from 'react';
import db from "./firebase";


class EthPrice extends Component {
    constructor(){
        super();
        this.state={
            amount:100
        }
    }
    componentDidMount(){
        const arryd=[];
        let ethsum=0;
        //const lastexchangeeth=db.collection('lastexchangeeth')
        
       // const docRef=db.collection("exchangead").doc('BoKScngo4qW4LQMUDXTU');
        db.collection("exchangead").get()
       .then(dd=>{
           dd.docs.forEach(doc=>{
               ethsum+=doc.data().totaleth;
               //ethsum++;
               arryd.push(doc.data());
               console.log(ethsum);
           });
       }).then(()=>{
           this.setState({
               amount:ethsum
           });
       })     


    }
    render() {
      return (
       <div>
           <h1>hello world {this.state.amount}</h1>
       </div>
      );
    }
  }

  export default EthPrice;