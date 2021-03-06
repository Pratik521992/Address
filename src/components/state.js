import React, { Component } from 'react';


class SelectState extends Component {

   
    
    render(){
        let val = this.props.val;
        let options = val.map(obj => {
            return (
                <option key={obj.id} value={obj.state}>{obj.state}</option>
            )
        })
        return (
            <div class="form-group">
      <label for="sel1">Select list (select one):</label>
      <select class="form-control" onChange={(e)=> this.props.onChange(e.target.value)}>
                    <option >Select state</option>
                    {options}
                    
                </select>
            </div>
        )
    }
}

export default SelectState;