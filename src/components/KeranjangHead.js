import React, { Component } from 'react'

class KeranjangHead extends Component {
    render() {
        const { tambah, counter } = this.props
        return (
            <div className="clearfix cart-website absolute" onclick="showCartBoxDetail()">
                <i className="fa fa-shopping-basket" style={{ "fontSize": "42px" }} />
                <p className="count-total-shopping absolute" style={{ "fontSize": "25px", "padding": "4px 6px" }}>
                    {counter}
                </p>
            </div>
        )
    }
}
export default KeranjangHead