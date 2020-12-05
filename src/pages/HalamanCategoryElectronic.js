import React, { Component } from 'react'
import Barang from '../components/Barang'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Electronics from './details/Electronics';

class HalamanCategoryElectronic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            getData: [],
            counter: 0
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        let api_endpoint_search = "https://fakestoreapi.com/products";
        fetch(api_endpoint_search)
            .then(response => {


                if (response.status === 200) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }

            }).then(response => {
                this.setState({
                    datas: response,
                });
                console.log(response);

            }).catch((reject) => {
                alert(reject);
            });
    }

    tambah = (e) => {
        let counter = this.state.counter + 1
    }

    render() {
        const {
            title,
            category,
            price,
            totalPrice,
            description,
            getData,
            datas,
            key,
            image
        } = this.state;

        const tambah = this.tambah;

        return (
            <div>
                <Header tambah={tambah} />
                <div className="container">
                    <h1>
                        category electronic
                    </h1>
                </div>
                <div className="container">
                    <div className="row" style={{ "marginTop": "30px", "marginLeft": "20px" }}>

                        {
                            datas.map(element => (
                                <div className="col-md-3">
                                    <Electronics
                                        key={element.id}
                                        id={element.id}
                                        title={element.title}
                                        image={element.image}
                                        price={element.price}
                                        category={element.category}
                                        description={element.description}
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default HalamanCategoryElectronic