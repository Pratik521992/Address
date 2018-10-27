import React, { Component } from 'react';
import '../App.css';


class Address  extends Component {

    render (){
        let address = this.props;
        console.log(address)
    
       return (
           <div className="address">
               <div><strong>State </strong>: {address.data.selectedstate}</div>
               <div><strong>District </strong>: {address.data.selectedDistrict}</div>
               <div><strong>City </strong>:{address.data.selectedCity}</div>
           </div>
       )
    }
}



export default Address;