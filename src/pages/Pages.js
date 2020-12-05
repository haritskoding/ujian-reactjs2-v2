import Navbar from '../components/Navbar';
import HalamanHome from './HalamanHome';
import HalamanDetail from './HalamanDetail';
import HalamanCart from './HalamanCart';

import {
    BrowserRouter as Teguh,
    Route,
} from "react-router-dom";



function Pages() {
    return (
        <Teguh>
            <Navbar />
            <Route exact path="/" component={HalamanHome} />
            <Route path="/detail" component={HalamanDetail} />
            <Route path="/cart" component={HalamanCart} />
        </Teguh>

    );
}

export default Pages;
