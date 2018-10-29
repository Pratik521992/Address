import React, { Component } from 'react';
import SelectState from './components/state';
import SelectRegion from './components/district';
import SelectCity from './components/cities';
import data from './data.json';
import data2 from './data2.json';
import Address from './components/address';

class App extends Component {

  constructor(){
    super();

    this.state = {
      selectstate : data.states,
      selectedDistrict : '',
      districts : '',
     
      selectedCity : '',
      cities : '',
      load : false
      
    }
    this.getSelectedState = this.getSelectedState.bind(this);
    this.getSelectedDistrict = this.getSelectedDistrict.bind(this);
    this.show = this.show.bind(this);
  }
  componentWillMount(){
    this.setState({ districts : '',cities : ''});
  }
  getSelectedState(e){

    this.setState({ selectedstate : e, load : false, districts : '',selectedCity : '',cities : '',selectedDistrict : ''});
    
   
    console.log(this.getregion(e));
  }
  getSelectedDistrict(e){

    this.setState({ selectedDistrict : e, load : false ,selectedCity : ''});
    console.log(this.getcity(e));
   
    
  }
  getregion(states){
    let district = [];
     
     if(states === '')
     this.setState({ districts : 'select state'});
     data.states.forEach((i) => {
         
         if(i.state === states){
         console.log("EUREKA");
         this.setState({ districts : i.districts})
         }
     })   


     return district;


 }
 getcity(districts){
  let city = [];
   
   if(districts === '')
   this.setState({ cities : ''});
   data2.districts.forEach((i) => {
       
       if(i.district === districts){
       console.log("EUREKA again");
       this.setState({ cities : i.cities})
       }
   })   
   

   return city;


}
show (e){

  this.setState({ load : true, selectedCity : e});

  

}

  

  render() {
    
    if(this.state.load === true){
    var add = <Address data = {this.state}/>
    }
    return (
      <div className="App">
        <h1>Address Page</h1>
        <SelectState val={this.state.selectstate} onChange={this.getSelectedState}/>
        <SelectRegion district = {this.state.districts} onChange={this.getSelectedDistrict} />
        <SelectCity cities= {this.state.cities} onChange = {this.show} />
        {add}
      </div>
    );
  }
}

export default App;
