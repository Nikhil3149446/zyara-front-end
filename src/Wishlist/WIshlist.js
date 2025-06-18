import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetailItem from "../ProductDetails/ProductDetailItem";

function Wishlist(){
    const [wishlistItems,setWishlistItems]=useState([]);
    async function getItemsOfWishlist(){
        const result=await axios.get('http://localhost:8080/get-items-of-wishlist');
        console.log("The result of fetching the wishlist items is",result.data)
        return result.data;
    }
    useEffect(()=>{
        const items=getItemsOfWishlist()
        setWishlistItems(items);
    },[])

    return (
        <div className="w-full min-h-screen mt-[60px] flex flex-col text-start pl-10 pr-10">
            <p className="font-semibold text-xl mt-10">My Wishlist</p>
            <Divider orientation="horizontal" sx={{marginTop:'20px'}}/>
            <ProductDetailItem />
        </div>

    )
}
export default Wishlist;