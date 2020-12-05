import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            menus: [
                { label: 'Home', path: "/" },
                { label: 'Detail', path: "/detail" },
                { label: 'Cart', path: "/cart" }
            ]
        }
    }

    render() {
        return (
            <ul>
                {this.state.menus.map(menu => {
                    return (
                        <li key={menu.label} style={styles.menuLi} >
                            <Link to={menu.path} >{menu.label}</Link>
                        </li>
                    )
                })
                }


            </ul >
        )
    }
}

const styles = {
    menuLi: {
        "marginTop": "310px",
        display: 'inline-block',
        padding: '16px'
    }
}

export default Navbar