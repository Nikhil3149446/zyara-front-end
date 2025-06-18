import { Route, Routes } from "react-router-dom";
import CartHomePage from "./Cart/CartHomePage";
import Home from "./Home";
import ProductDetails from "./ProductDetails/ProductDetail";
import LoginHomePage from "./Login/LoginHomePage";
import Wishlist from "./Wishlist/WIshlist";

function Router(){
    return (
        <Routes>
        <Route path="/cart" element={<CartHomePage/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/productCategory" element={<ProductDetails/>}></Route>
        <Route path="/login" element={<LoginHomePage/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        </Routes>
    )
}
export default Router;