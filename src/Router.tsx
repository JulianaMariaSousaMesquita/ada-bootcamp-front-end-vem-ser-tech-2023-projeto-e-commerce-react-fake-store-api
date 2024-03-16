import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home';
import ProductList from '@/pages/ProductList';
import ProductDetails from '@/pages/ProductDetails';
import Cart from '@/pages/Cart';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}
