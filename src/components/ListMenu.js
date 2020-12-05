import React, { Component } from 'react'
import { Link } from "react-router-dom"

class ListMenu extends Component {
    render() {
        const { category, key, kat } = this.props;
        console.log(category);
        if (category === 'jewelery') {
            return (
                <>
                    <li key={key}>
                        <Link to="/category/jewelery">
                            <i className="fa fa-diamond"></i>
                            <p>
                                {category}
                            </p>
                        </Link>
                    </li>
                </>
            )
        }
        else if (category === 'women clothing') {
            return (
                <>
                    <li key={key}>
                        <Link to="/category/womenclothing">
                            <i className='fa fa-female'></i>
                            <p>
                                {category}
                            </p>
                        </Link>
                    </li>
                </>
            )
        }
        else if (category === 'electronics') {
            return (
                <>
                    <li key={key}>
                        <Link to="/category/electronic">
                            <i className='fa fa-television'></i>
                            <p>
                                {category}
                            </p>
                        </Link>
                    </li>
                </>
            )
        }
        else if (category === 'men clothing') {
            return (
                <>
                    <li key={key}>
                        <Link to="/category/menclothing">
                            <i className='fa fa-male'></i>
                            <p>
                                {category}
                            </p>
                        </Link>
                    </li>
                </>
            )
        }
    }
}
export default ListMenu;