
import './app.scss';
import Product from './components/product/Product';
import { Routes, Route, } from "react-router-dom";
import ProductCatalogue from './components/product/productCatalogue/ProductCatalogue';
function App() {
  return (
    <div className="App py-3">
       <Routes>
       <Route path="/" element={<Product />} />
       <Route path="/product/" element={<ProductCatalogue />} />
     </Routes>
    </div>
  );
}

export default App;
