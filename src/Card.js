import React from 'react';
import './Card.css'

class Card extends React.Component{
    　render(){
        return(
            <div id="card" className="card" onClick={this.props.onClickCard} data-index={this.props.index}>
                <div className="name" >
                    {this.props.info.name}
                </div>
                <div className="email">
                    {this.props.info.email}
                </div>
                <div className="phone">
                    {this.props.info.phone}
                </div>
                <div className="role">
                    {this.props.info.role}
                </div>
            </div>
        );
     }
}

export default Card;