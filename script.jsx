
class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
 
      pvchart: [{ name: 'You' }],
      pvchart1: [{ number: '2' }],
    };
  }
  
  handleNameChange (evt)  {
    this.setState({ name: evt.target.value });
    this.setState({ number: evt.target.value });
  }
  
  handlepvchartNameChange (idx) => (evt) => {
    const newpvchart = this.state.pvchart.map((pvchart, sidx) => {
      if (idx !== sidx) return pvchart;
      return { ...pvchart, name: evt.target.value };
    });
    
    this.setState({ pvchart: newpvchart });
  }
  handlepvchartNumberChange = (idx) => (evt) => {
    const newpvchart1 = this.state.pvchart1.map((pvchart1, sidx) => {
      if (idx !== sidx) return pvchart1;
      return { ...pvchart1, number: evt.target.value };
    });
    
    this.setState({ pvchart1: newpvchart });
  }
  

  
  handleAddShareholder = () => {

    this.setState({ pvchart: this.state.pvchart.concat([{ name: 'DL1' }]) });
    this.setState({ pvcharts: this.statepvchart1.concat([{ number: '0' }]) });
  }
  
  handleRemoveShareholder = (idx) => () => {
    this.setState({ pvchart: this.state.pvchart.filter((s, sidx) => idx !== sidx) });
  }
  
  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
     
      
   
        {this.state.pvchart.map((pvchart, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Shareholder #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handlepvchartNameChange(idx)}
            />
             <input
              type="text"
              placeholder={`pvchart #${idx + 1} number`}
              value={shareholder.number}
              onChange={this.handlepvchartNumberChange(idx)}
            />
            <button type="button" onClick={this.handleRemovepvchart(idx)} className="small">-</button>
            <button type="button" onClick={this.handleAddpvchart} className="small">+</button>
          </div>
        ))}

      
      </form>
    )
  }
}

ReactDOM.render(<IncorporationForm />, document.body);