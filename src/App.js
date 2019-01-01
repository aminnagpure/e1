import React, { Component } from 'react';

//import logo from './logo.svg';
//import './App.css';
//import EthPrice from './component/ethprice';
//import BinanceEtherdata from './component/gettotaleth';
import BinanceEth1 from './component/binance-eth1';

//import AddEthereumAddress from './component/addAddress';
import AddExchangeToMonitor from './component/AddExchangestomonitor';

//import GetTotalEth from './component/gettotaleth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
  
        
  <BinanceEth1/>
        <AddExchangeToMonitor/>
      </div>
    );
  }
}

export default App;
