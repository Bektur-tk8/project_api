import React, { Component } from "react";



export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brendon Start
                </li>
                <li className="list-group-item">
                    Geremy 
                </li>
            </ul>
        );
    }
}