import React, {Component} from 'react';

//const Multiselect = require("react-bootstrap-multiselect");

class Filter extends Component {
    /*constructor(){
        super();
        this.state = {
          value:"All",
        };
    }*/

    /*handleChange = (event) => {
        this.setState({value:event.target.value});
    }*/

    render() {
        //console.log("Multiselect", Multiselect);
        return (
            <div>
                {/*<Multiselect
                maxHeight={true}
            />*/}

                <form id="filter">
                    <div>
                        <label>Role：</label>
                        <select onChange={this.props.handleChange}>
                            <option value="All" label="All">All</option>
                            <option value="Tech Lead" label="Tech Lead">Tech Lead</option>
                            <option value="PO" label="PO">PO</option>
                            <option value="PM" label="PM">PM</option>
                            <option value="BA" label="BA">BA</option>
                            <option value="Dev" label="Dev">Dev</option>
                            <option value="QA" label="QA">QA</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default Filter;