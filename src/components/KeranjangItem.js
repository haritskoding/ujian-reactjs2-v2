import React, { Component } from 'react';

class KeranjangItem extends Component {
    render() {
        return (
            <div class="pushmenu menu-home5">
                <div class="menu-push">
                    <span class="close-left js-close"><i class="fa fa-times f-20"></i></span>
                    <div class="clearfix"></div>
                    <form role="search" method="get" id="searchform" class="searchform" action="/search">
                        <div>
                            <label class="screen-reader-text" for="q"></label>
                            <input type="text" placeholder="Search for products" value="" name="q" id="q" autocomplete="off">
                                <input type="hidden" name="type" value="product">
                                    <button type="submit" id="searchsubmit"><i class="ion-ios-search-strong"></i></button>
                </div>
                 </form>
                            <ul class="nav-home5 js-menubar">
                                <li class="level1 active dropdown">
                                    <a href="#">Home</a>
                                    <span class="icon-sub-menu"></span>
                                    <ul class="menu-level1 js-open-menu">
                                        <li class="level2"><a href="home_v1.html" title="">Home 1</a></li>
                                        <li class="level2"><a href="home_v2.html" title="">Home 2</a></li>
                                        <li class="level2"><a href="home_v3.html" title="">Home 3</a></li>
                                    </ul>
                                </li>
                                <li class="level1 active dropdown"><a href="#">Shop</a>
                                    <span class="icon-sub-menu"></span>
                                    <div class="menu-level1 js-open-menu">
                                        <ul class="level1">
                                            <li class="level2">
                                                <a href="#">Shop Type</a>
                                                <ul class="menu-level-2">
                                                    <li class="level3"><a href="category_v1.html" title="">Category V1</a></li>
                                                    <li class="level3"><a href="category_v1_2.html" title="">Category V1.2</a></li>
                                                    <li class="level3"><a href="category_v2.html" title="">Category V2</a></li>
                                                    <li class="level3"><a href="category_v2_2.html" title="">Category V2.2</a></li>
                                                    <li class="level3"><a href="category_v3.html" title="">Category V3</a></li>
                                                    <li class="level3"><a href="category_v3_2.html" title="">Category V3.2</a></li>
                                                    <li class="level3"><a href="category_v4.html" title="">Category V4</a></li>
                                                    <li class="level3"><a href="category_v4_2.html" title="">Category V4.2</a></li>
                                                </ul>
                                            </li>
                                            <li class="level2">
                                                <a href="#">Single Product Type</a>
                                                <ul class="menu-level-2">
                                                    <li class="level3"><a href="product_v1.html" title="">Product Single 1</a></li>
                                                    <li class="level3"><a href="product_v2.html" title="">Product Single 2</a></li>
                                                    <li class="level3"><a href="product_v3.html" title="">Product Single 3</a></li>
                                                </ul>
                                            </li>
                                            <li class="level2">
                                                <a href="#">Order Page</a>
                                                <ul class="menu-level-2">
                                                    <li class="level3"><a href="cartpage.html" title="">Cart Page</a></li>
                                                    <li class="level3"><a href="checkout.html" title="">Checkout</a></li>
                                                    <li class="level3"><a href="compare.html" title="">Compare</a></li>
                                                    <li class="level3"><a href="quickview.html" title="">Quickview</a></li>
                                                    <li class="level3"><a href="trackyourorder.html">Track Order</a></li>
                                                    <li class="level3"><a href="wishlist.html">WishList</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="clearfix"></div>
                                    </div>
                                </li>
                                <li class="level1">
                                    <a href="#">Pages</a>
                                    <span class="icon-sub-menu"></span>
                                    <ul class="menu-level1 js-open-menu">
                                        <li class="level2"><a href="about.html" title="About Us ">About Us </a></li>
                                        <li class="level2"><a href="contact.html" title="Contact">Contact</a></li>
                                        <li class="level2"><a href="404.html" title="404">404</a></li>
                                    </ul>
                                </li>
                                <li class="level1">
                                    <a href="#">Blog</a>
                                    <span class="icon-sub-menu"></span>
                                    <ul class="menu-level1 js-open-menu">
                                        <li class="level2"><a href="blog.html" title="Blog Standar">Blog Category</a></li>
                                        <li class="level2"><a href="blogdetail.html" title="Blog Gird">Blog Detail</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
    </div>
                    <!-- end push menu-->
	<!-- Menu Mobile -->

	<!-- Header Box -->
	<div class="wrappage">

                        <!-- Content Box -->
	<div class="relative full-width">
                            <!-- Breadcrumb -->
		<div class="container-web relative">
                                <div class="container">
                                    <div class="row">
                                        <div class="breadcrumb-web">
                                            <ul class="clear-margin">
                                                <li class="animate-default title-hover-red"><a href="#">Home</a></li>
                                                <li class="animate-default title-hover-red"><a href="#">Shoping Cart</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Breadcrumb -->
		<!-- Content Shoping Cart -->
		<div class="relative container-web">
                                <div class="container">
                                    <div class="row relative">
                                        <!-- Content Shoping Cart -->
					<div class="col-md-8 col-sm-12 col-xs-12 relative left-content-shoping clear-padding-left">
                                            <p class="title-shoping-cart">Shopping Cart</p>
                                            <div class="relative full-width product-in-cart border no-border-l no-border-r overfollow-hidden">
                                                <div class="relative product-in-cart-col-1 center-vertical-image">
                                                    <img src="img/product_home_5-min.png" alt="">
							</div>
                                                    <div class="relative product-in-cart-col-2">
                                                        <p class="title-hover-black"><a href="#" class="animate-default">Voyage Yoga Bag</a></p>
                                                    </div>
                                                    <div class="relative product-in-cart-col-3">
                                                        <span class="ti-close relative remove-product"></span>
                                                        <p class="text-red price-shoping-cart">$350.00</p>
                                                    </div>
                                                </div>
                                                <div class="relative full-width product-in-cart border no-border-l no-border-r overfollow-hidden">
                                                    <div class="relative product-in-cart-col-1 center-vertical-image">
                                                        <img src="img/img_product_small_9-min.png" alt="">
							</div>
                                                        <div class="relative product-in-cart-col-2">
                                                            <p class="title-hover-black"><a href="#" class="animate-default">Cras tempus eleifend molestie</a></p>
                                                        </div>
                                                        <div class="relative product-in-cart-col-3">
                                                            <span class="ti-close relative remove-product"></span>
                                                            <p class="text-red price-shoping-cart">$350.00</p>
                                                        </div>
                                                    </div>
                                                    <aside class="btn-shoping-cart justify-content top-margin-default bottom-margin-default">
                                                        <a href="#" class="clear-margin animate-default">Continue Shopping</a>
                                                        <a href="#" class="clear-margin animate-default">Update Cart</a>
                                                    </aside>
                                                </div>
                                                <!-- End Content Shoping Cart -->
					<!-- Content Right -->
					<div class="col-md-4 col-sm-12 col-xs-12 right-content-shoping relative clear-padding-right">
                                                    <p class="title-shoping-cart">Coupon</p>
                                                    <div class="full-width relative coupon-code bg-gray  clearfix">
                                                        <input type="text" class="full-width" name="coupon_code" placeholder="Coupon Code">
                                                            <button class="full-width top-margin-15-default">APPLY COUPON</button>
						</div>
                                                        <p class="title-shoping-cart">Cart Total</p>
                                                        <div class="full-width relative cart-total bg-gray  clearfix">
                                                            <div class="relative justify-content bottom-padding-15-default border no-border-t no-border-r no-border-l">
                                                                <p>Subtotal</p>
                                                                <p class="text-red price-shoping-cart">$700.00</p>
                                                            </div>
                                                            <div class="relative border top-margin-15-default bottom-padding-15-default no-border-t no-border-r no-border-l">
                                                                <p class="bottom-margin-15-default">Shipping</p>
                                                                <div class="relative justify-content">
                                                                    <ul class="check-box-custom title-check-box-black clear-margin clear-margin">
                                                                        <li>
                                                                            <label>Free Shipping
												<input type="radio" name="shipping" checked="">
                                                                                    <span class="checkmark"></span>
			  								</label>
										</li>
                                                                            <li>
                                                                                <label>Standard
												<input type="radio" name="shipping">
                                                                                        <span class="checkmark"></span>
			  								</label>
										</li>
                                                                                <li>
                                                                                    <label>Local Pickup
												<input type="radio" name="shipping">
                                                                                            <span class="checkmark"></span>
			  								</label>
										</li>
									</ul>
                                                                                <p class="price-gray-sidebar">$20.00</p>
								</div>
                                                                            <div onclick="optionShiping(this)" class="relative full-width select-ship-option justify-content top-margin-15-default">
                                                                                <p class="border no-border-r no-border-l no-border-t">Calculate Shipping</p>
                                                                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                                                                                <ul class="clear-margin absolute full-width">
                                                                                    <li onclick="selectOptionShoping(this)">Calculate Shipping 1</li>
                                                                                    <li onclick="selectOptionShoping(this)">Calculate Shipping 2</li>
                                                                                    <li onclick="selectOptionShoping(this)">Calculate Shipping 3</li>
                                                                                </ul>
                                                                            </div>
							</div>
                                                                        <div class="relative justify-content top-margin-15-default">
                                                                            <p class="bold">Total</p>
                                                                            <p class="text-red price-shoping-cart">$700.00</p>
                                                                        </div>
						</div>
                                                                    <button class="btn-proceed-checkout button-hover-red full-width top-margin-15-default">Proceed to Checkout</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                           
        )
    }
}
export default KeranjangItem