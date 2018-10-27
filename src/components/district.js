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
            <div>
                <select className="select" onChange={(e)=> this.props.onChange(e.target.value)}>
                    <option>Select Region</option>
                    {val}
                </select>
            </div>
        )
    }

}

export default SelectRegion;