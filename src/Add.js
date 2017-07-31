import React, {Component} from 'react';
import './Add.css'

class Add extends Component{
    render(){
        return(
            <div className="add">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" onBlur={this.props.handleAddChange}></input>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="text" name="email" onBlur={this.props.handleAddChange}></input>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" onBlur={this.props.handleAddChange}></input>
                </div>
                <div>
                    <label>Role:</label>
                    <input type="text" name="role" onBlur={this.props.handleAddChange}></input>
                </div>
                <div>
                    <button onClick={this.props.handleAdd}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Add;