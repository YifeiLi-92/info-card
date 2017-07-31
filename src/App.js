import React, {Component} from 'react';
import './App.css';
import Card from './Card.js';
import Filter from './Filter';
import Add from './Add';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoList: [{
                name: "王智",
                email: "123@123",
                phone: "123",
                role: "Tech Lead",
                deleted: false
            }, {
                name: "Chintan",
                email: "234@234",
                phone: "234",
                role: "PO",
                deleted: false
            }, {
                name: "Kefirah",
                email: "45@45",
                phone: "45",
                role: "BA",
                deleted: false
            }, {
                name: "喻晗",
                email: "345@345",
                phone: "345",
                role: "Dev",
                deleted: false
            }, {
                name: "刘司琪",
                email: "456@456",
                phone: "456",
                role: "Dev",
                deleted: false
            }, {
                name: "顾超",
                email: "567@567",
                phone: "567",
                role: "Dev",
                deleted: false
            }, {
                name: "李娅",
                email: "678@678",
                phone: "678",
                role: "QA",
                deleted: false
            }],
            name: null,
            email: null,
            phone: null,
            role: null,
            selected_role: "All",
            deleted_card: -1,
            flag: true
        }
    }

    handleChange(event) {
        document.getElementById("cards").style.visibility = "visible";
        document.getElementById("add_cards").style.visibility = "hidden";
        this.setState({selected_role: event.target.value});
    }

    handleAdd(event) {
        const card = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            role: this.state.role,
            deleted: false
        };
        const temp = this.state.infoList.slice();
        temp.push(card);
        this.setState({infoList: temp});
        document.getElementById("cards").style.visibility = "visible";
        document.getElementById("cards").style.display = "block";
        document.getElementById("add_cards").style.visibility = "hidden";
    }

    handleAddChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    addCard = () => {
        document.getElementById("cards").style.visibility = "hidden";
        document.getElementById("cards").style.display = "none";
        document.getElementById("add_cards").style.visibility = "visible";
    }

    deleteCard = () => {
        // alert(this.state.deleted_card);
        console.log(1123);
        const result = this.state.infoList.map((item, index) =>
            index.toString() === this.state.deleted_card ?
                {name: item.name, email: item.email, phone: item.phone, role: item.role, deleted: true} :
                item
        );
        this.setState({
            infoList: result,
            flag: true
        });
        //alert(this.state.infoList[0].deleted);
    }

    onClickCard(event) {
        console.log("i am here");
        document.getElementById("delete").removeAttribute("disabled");
        const target = event.currentTarget;
        this.setState({
            deleted_card: target.getAttribute("data-index"),
            flag: false
        })
        //document.getElementById("delete").disabled = false;
    }

    render() {
        //console.log("@@@@@@@",this.state.infoList[7]);
        let cards = [];
        let card_index = 0;
        if (this.state.infoList != null) {
            this.state.infoList.forEach((info) => {
                if ((this.state.selected_role === "All" || this.state.selected_role === info.role) && info.deleted === false) {
                    cards.push(<Card
                        key={card_index}
                        index={card_index}
                        info={info}
                        selected_role={this.state.selected_role}
                        onClickCard={this.onClickCard.bind(this)}
                    />);
                }
                card_index++;
            });
        }
        console.log("cards", cards);
        return (
            <div className="body">
                <div>
                    <Filter handleChange={this.handleChange.bind(this)}/>
                    <button onClick={() => this.addCard()}>
                        Add
                    </button>
                    <button id="delete" onClick={this.deleteCard.bind(this)} disabled={this.state.flag}>
                        Delete
                    </button>
                </div>
                <div id="cards">
                    {cards}
                </div>
                <div id="add_cards" style={{visibility: "hidden"}}>
                    <Add handleAdd={this.handleAdd.bind(this)} handleAddChange={this.handleAddChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
