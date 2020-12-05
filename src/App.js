// import Navbar from '../components/Navbar';
import HalamanHome from './pages/HalamanHome';
import HalamanDetail from './pages/HalamanDetail';
import HalamanCart from './pages/HalamanCart';

import {
  BrowserRouter as Teguh,
  Route,
} from "react-router-dom";
import HalamanCategory from './pages/HalamanCategoryElectronic';
import HalamanCategoryElectronic from './pages/HalamanCategoryElectronic';
import HalamanCategoryJewelery from './pages/HalamanCategoryJewelery';
import HalamanCategoryMale from './pages/HalamanCtegoryMale';
import HalamanCategoryFemale from './pages/HalamanCategoryFemale';


function App() {
  return (
    <Teguh>
      {/* <Navbar /> */}
      <Route exact path="/" component={HalamanHome} />
      <Route path="/detail" component={HalamanDetail} />
      <Route path="/category/jewelery" component={HalamanCategoryJewelery} />
      <Route path="/category/electronic" component={HalamanCategoryElectronic} />
      <Route path="/category/menclothing" component={HalamanCategoryMale} />
      <Route path="/category/womenclothing" component={HalamanCategoryFemale} />
    </Teguh>

  );
}

export default App;
