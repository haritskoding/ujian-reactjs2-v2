import React, { Component } from 'react'
import KeranjangHead from './KeranjangHead'

class Header extends Component {
    render() {
        const { tambah, counter } = this.props;
        return (
            <div className="wrappage">
                <header className="relative full-width box-shadow">
                    <div className="clearfix container-web relative">
                        <div className=" container">
                            <div className="row">
                                <div className=" header-top">
                                    <p className="contact_us_header col-md-4 col-xs-12 col-sm-3 clear-margin">
                                        <img src="img/icon_phone_top.png" alt="Icon Phone Top Header" /> Call us <span className="text-red bold">070-7782-7137</span>
                                    </p>
                                    <div className="clear-padding menu-header-top text-right col-md-8 col-xs-12 col-sm-6">
                                        <ul className="clear-margin">
                                            <li className="relative"><a href="#">Hai, Aris</a></li>
                                            <li className="relative"><a href="#">Wishlist</a></li>
                                            <li className="relative">
                                                <a href="#">EN</a>
                                                <ul>
                                                    <li className="relative"><a href="#">JP</a></li>
                                                    <li className="relative"><a href="#">EN</a></li>
                                                    <li className="relative"><a href="#">CN</a></li>
                                                </ul>
                                            </li>
                                            <li className="relative">
                                                <a href="#">USD</a>
                                                <ul>
                                                    <li className="relative"><a href="#">AUD</a></li>
                                                    <li className="relative"><a href="#">USD</a></li>
                                                    <li className="relative"><a href="#">CAD</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="clearfix header-content full-width relative">
                                    <div className="clearfix icon-menu-bar">
                                        <i className="data-icon data-icon-arrows icon-arrows-hamburger-2 icon-pushmenu js-push-menu" aria-hidden="true" />
                                    </div>
                                    <div className="clearfix logo">
                                        <a href="#"><img alt="Logo" src="img/logo.png" /></a>
                                    </div>
                                    <div className="clearfix search-box relative float-left">
                                        <form method="GET" action="/" className>
                                            <div className="clearfix category-box relative">
                                                <select name="cate_search">
                                                    <option>All Category</option>
                                                    <option>Food</option>
                                                    <option>Mobile &amp; Tablet</option>
                                                    <option>Electric Appliances</option>
                                                </select>
                                            </div>
                                            <input type="text" name="s" placeholder="Enter keyword here . . ." />
                                            <button type="submit" className="animate-default button-hover-red">Search</button>
                                        </form>
                                    </div>
                                    <div className="clearfix icon-search-mobile absolute">
                                        <i onclick="showBoxSearchMobile()" className="data-icon data-icon-basic icon-basic-magnifier" />
                                    </div>
                                    <KeranjangHead tambah={tambah} counter={counter} />
                                    <div className="cart-detail-header border">
                                        <div className="relative">
                                            <div className="product-cart-son clearfix">
                                                <div className="image-product-cart float-left center-vertical-image ">
                                                    <a href="#"><img src="img/product_image_6-min.png" alt="" /></a>
                                                </div>
                                                <div className="info-product-cart float-left">
                                                    <p className="title-product title-hover-black"><a className="animate-default" href="#">MH02-Black09</a></p>
                                                    <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                                                </div>
                                            </div>
                                            <div className="product-cart-son">
                                                <div className="image-product-cart float-left center-vertical-image">
                                                    <a href="#"><img src="img/product_image_7-min.png" alt="" /></a>
                                                </div>
                                                <div className="info-product-cart float-left">
                                                    <p className="title-product title-hover-black"><a className="animate-default" href="#">Voyage Yoga Bag</a></p>
                                                    <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative border no-border-l no-border-r total-cart-header">
                                            <p className="bold clear-margin">Subtotal:</p>
                                            <p className=" clear-margin bold">$700</p>
                                        </div>
                                        <div className="relative btn-cart-header">
                                            <a href="#" className="uppercase bold animate-default">view cart</a>
                                            <a href="#" className="uppercase bold button-hover-red animate-default">checkout</a>
                                        </div>
                                    </div>
                                    <div className="mask-search absolute clearfix" onclick="hiddenBoxSearchMobile()" />
                                    <div className="clearfix box-search-mobile">
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <a className="menu-vertical hidden-md hidden-lg" onclick="showMenuMobie()">
                                    <span className="animate-default"><i className="fa fa-list" aria-hidden="true" /> all categories</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        )
    }
}
export default Header;