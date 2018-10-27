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
           <div >
               <select className="select" onChange={(e)=> this.props.onChange(e.target.value)}>
                   <option>City</option>
                   {val}
               </select>
           </div>
       )
    }
}



export default SelectCity;