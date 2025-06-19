import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetailItem, { fetchFavouriteItems } from "../ProductDetails/ProductDetailItem";


function Wishlist(){
    const [wishlistItems,setWishlistItems]=useState({
        items:[],
    });


    useEffect(()=>{
        async function fetchItems(){
       const favouriteItems=await fetchFavouriteItems();
         console.log("The Favourite Items are ",favouriteItems);
       setWishlistItems({
        ...wishlistItems,
        items:favouriteItems
    })
        }
        fetchItems();
        
    },[])
    return (
        <div className="w-full min-h-screen mt-[60px] flex flex-col text-start pl-10 pr-10">
            <p className="font-semibold text-xl mt-10">My Wishlist</p>
            <Divider orientation="horizontal" sx={{marginTop:'20px'}}/>
            {console.log("The wishlist items are ",wishlistItems.items)}
            {   wishlistItems.items.map((key,index)=>{
                return(
                <ProductDetailItem productId={key.id} productName={key.name} productUrl={key.image} key={index} />
                )
            })
                }
        </div>

    )
}
export default Wishlist;