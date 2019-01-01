import React,{Component} from 'react';

class AddExchange extends Component {
    constructor(props) {
      super(props);
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
      alert('An essay was submitted: ' + this.state.exchange);
      event.preventDefault();
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

  export default AddExchange;