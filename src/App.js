import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {


      pvchart: [{ name: 'Me' }],
      pvchart1: [{ number: '0' }],
      pvchart3: [{ total: '0' }]
    };
  }
  
  handleNameChange (evt)  {
    this.setState({ name: evt.target.value });

  }
  
  handlepvchartNameChange =(idx) => (evt) => {
    const newpvchart = this.state.pvchart.map((pvchart, sidx) => {
      if (idx !== sidx) return pvchart;
      return { ...pvchart, name: evt.target.value };
    });
    
    this.setState({ pvchart: newpvchart });
  }
  handlepvchartNumberChange = (idx) => (evt) => {
    const newpvchart3 = this.state.pvchart3.map((pvchart3, sidx) => {
      if (idx !== sidx) return pvchart3;
      return { ...pvchart3, total: "2" };
    });
    
    this.setState({ pvchart3: newpvchart3 });
  }
  

  
  handleAddpvchart = () => {
    this.state.pvchart.map((pvchart, idx) => {

    this.setState({ pvchart: this.state.pvchart.concat([{ name:  "DL" +idx    }]) });
   
   
  });

 


 
  }
  handleRemovepvchart = (idx) => () => {
    this.setState({ pvchart: this.state.pvchart.filter((s, sidx) => idx !== sidx) });
  }
  
  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
     
      
   
        {this.state.pvchart.map((pvchart, idx) => (
          <div class="pvchart">
       <img src="user.png"   width="12" height="12"/>
            <input
              type="text"
             
              value={pvchart.name}
              onChange={this.handlepvchartNameChange(idx)}
            />
                 
             <input
              type="text"
              value={pvchart.number}
              onChange={this.handlepvchartNumberChange(idx)}
            />
           
           <label >Total:</label><br/>
           <button type="button" onClick={this.handleAddpvchart} className="small plus ">+</button>
            <button type="button" onClick={this.handleRemovepvchart(idx)} className="small remove">-</button>
      
          </div>
        ))}

      
      </form>
    )
  }
}

ReactDOM.render(<Form />, document.body);