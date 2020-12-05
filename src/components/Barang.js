import React, { Component } from 'react'
import "../assets/css/menuItem.css";

class Barang extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        const {
            id,
            title,
            image,
            category,
            price,
            description,
            tambah
        } = this.props
        // console.log('dua ', handleClick);

        
        return (
            <div className="col-lg justify-content-end" >
                <div className="card menuCard"
                    key={id}
                    style={{ "width": "24rem", "minHeight": "35rem" }}
                >
                    <img
                        src={this.props.image}
                        className="card-img-top"
                        alt="Maaf data tidak tampil"
                        style={{ "maxHeight": "210px", "minHeight": "210px", "minWidth": "200px", "maxWidth": "200px" }}
                        width="200px" />
                    <div className="card-body">
                        <h5 className="card-title"></h5>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li
                            className="list-group-item"
                            style={{ "maxHeight": "70px", "minHeight": "70px" }}
                        >
                            Title : {title}
                        </li>
                        <li className="list-group-item">
                            Category : {category}
                        </li>
                        <li className="list-group-item">
                            Prices : {parseFloat(price)}
                        </li>
                        {/* <li className="list-group-item  desc">
                            Description : {description}
                        </li> */}
                        <li className="list-group-item">
                            <button
                                type="button"
                                id={id}
                                // className="btn"
                                // style={{
                                //     "cursor": "pointer",
                                //     "background": "white",
                                //     "border": "none"
                                // }}
                                className="btn btn-primary"
                                onClick={tambah}
                            >
                                Add cart
                                {/* <i

                                    className="fa fa-shopping-basket"
                                    style={{
                                        "color": "rgb(247,73,125)",
                                        "fontSize": "36px",
                                   
                                    }}>
                                    Add To Cart
                                </i> */}
                            </button>
                        </li>

                    </ul>
                </div>
            </div >
        )
    }
}
export default Barang;