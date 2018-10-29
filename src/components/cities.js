import React, { Component } from 'react';
import '../App.css';


class SelectCity  extends Component {

    render (){
        let city = this.props.cities;
       
       if(city.length>1){
       var val = city.map(places => {
        
           return (
               <option key={places.id}>{places}</option>
           )
       });
    }
       return (
        <div class="form-group">
        <label for="sel1">Select list (select one):</label>
        <select class="form-control" onChange={(e)=> this.props.onChange(e.target.value)}>
                   <option>Select City</option>
                   {val}
               </select>
           </div>
       )
    }
}



export default SelectCity;