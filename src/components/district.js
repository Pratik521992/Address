import React, { Component } from 'react';


class SelectRegion  extends Component {

   
    render (){
      
        
       let districts = this.props.district;
       
       if(districts.length>1){
       var val = districts.map(places => {
        
           return (
               <option key={places.id}>{places}</option>
           )
       });
       
    }
        return (
            <div class="form-group">
      <label for="sel1">Select list (select one):</label>
      <select class="form-control" onChange={(e)=> this.props.onChange(e.target.value)}>
                    <option selected>Select Region</option>
                    {val}
                </select>
            </div>
        )
    }

}

export default SelectRegion;