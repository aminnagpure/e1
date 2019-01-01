import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import db from "./firebase";

const arryd=[];
const arrysno=[];
const arrymain=[]

class BinanceEth1 extends Component {
    constructor(){
        super();
       /* this.state={           
           binance_1:'',
           preveth:0,
           noweth:0,
           poloneix_1:'',
           poloneix_1preveth:0,
           poloneix_1noweth:0,
           bitrex_1:'',
           bitrex_1preveth:0,
           bitrex_1noweth:0,
           kraken_3:'',
           kraken_3preveth:0,
           kraken_3noweth:0          
        }
        
       */

       this.state={
           sno:[],
           exchange:[]
       }
    }
    componentDidMount(){
        
        this.getexcahnges();
        
        //const lastexchangeeth=db.collection('lastexchangeeth')
        
       // const docRef=db.collection("exchangead").doc('BoKScngo4qW4LQMUDXTU');
      

       

    }
    render() {
        //const netbalance=this.state.netbalance;
        
     /*   if(netbalance>0){
            msg=<div><Alert color="danger"> market negative, ether moved to binance possible of dump </Alert> </div>
        }else{
            msg=<div><Alert color="success"> ether removed from binance possible price pump</Alert> </div>
        }*/
        //console.log(arryd); 
     
      return (
        
       <div>
           binance {this.state.binance_1} {'prev eth' + this.state.preveth}{'now eth' + this.state.noweth}
           

           

          
           
       </div>
      );
    }

    getexcahnges(){
        db.collection('ExchangesToMonitor').orderBy('dt',"desc") .get()
        .then(dd=>{
            dd.docs.forEach(doc=>{
                this.getexchangeAddetails(doc.data().exchange)
            })
        });
    }

    getexchangeAddetails(exch){
        console.log('called '+exch);
        let i=1
        db.collection(exch).orderBy('dt','desc').limit(2).get()
        .then(dd=>{
            dd.docs.forEach(doc=>{
                //ethsum+=doc.data().totaleth;
                //ethsum++;
               arryd.push(doc.data())
               this.setState({exchange:doc.data()})
             i=i+1;   
            })
        }).then(()=>{
            
            //this.setState({
             //   amount:ethsum
            //});
        })     
        console.log(arryd);
        //console.log(this.state.sno + ' ' + this.state.exchange)
          //console.log(this.state.exchange); 
    }
    
  }

  export default BinanceEth1;