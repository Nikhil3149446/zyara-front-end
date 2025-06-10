import { Route, Routes } from "react-router-dom";
import CartHomePage from "./Cart/CartHomePage";
import Home from "./Home";

function Router(){
    return (
        <Routes>
        <Route path="/cart" element={<CartHomePage/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}
export default Router;