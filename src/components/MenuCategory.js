import React, { Component } from 'react'
import ListMenu from './ListMenu';
import MenuItem from './MenuItem';
import { BrowserRouter, Route } from "react-router-dom";
import HalamanDetail from '../pages/HalamanDetail';

class MenuCategory extends Component {
    render() {
        const { datas } = this.props
        console.log(datas);

        const dataArr = datas.reduce((unique, currentValue) => {
            return unique.find(item => item.category === currentValue.category)
                ? unique
                : [...unique, currentValue];
        }, []);
        console.log('thisidh');
        console.log(dataArr);

        return (
            <div className="wrappage" style={{ "marginTop": "30px" }}>
                <div className="relative clearfix full-width">
                    {/* Menu & Slide */}
                    <div className="clearfix container-web relative">
                        <div className=" container relative">
                            <div className="row">
                                <div className="clearfix relative menu-slide clear-padding bottom-margin-default">
                                    {/* Menu */}
                                    <div className="clearfix menu-web relative">
                                      
                                            
                                            <ul>
                                                {
                                                    dataArr.map(element => (

                                                        <ListMenu category={element.category} />
                                                    ))

                                                }

                                            </ul>
                                    </div>
                                    {/* Slide */}
                                    <div className="clearfix slide-box-home slide-v1 relative">
                                        <div className="clearfix slide-home owl-carousel owl-theme">
                                            <div className="item">
                                                <img src="img/slide_2.png" alt="Banner Header 2" style={{ "height": "280px", "width": "1000px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Menu & Slide */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MenuCategory;