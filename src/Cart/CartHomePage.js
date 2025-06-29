import { Divider } from "@mui/material";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import axios from "axios";

function CartHomePage(){
    const [productData,setProductData]=useState([]);
    const [priceDetails,setPriceDetails]=useState({
        totalPrice:0
    })
    useEffect(()=>{
        async function fetchProductsFromCart(){
            const result= await axios.get('http://localhost:8080/cart')
            setProductData(result.data);
            const total = result.data.reduce((sum, item) => sum + item.price, 0);
            setPriceDetails({
                totalPrice: total
            });
        }
        fetchProductsFromCart();
        
        
    },[])
    return (
        <div className="mt-[62px] w-full bg-gray-200 min-h-screen flex flex-row">
        <div className="w-[65%]">
            {   
                productData.map((key,index)=>{
                    return (
                        <CartItem imageUrl={key.image} productName={key.name} productPrice={key.price} productId={key.id} setTotalPrice={setPriceDetails} totalPrice={priceDetails.totalPrice}/>
                    )
                })
            }
                
        </div>
        <div className="w-[35%] rounded">
        <div className="bg-white mt-2 rounded">
          <h1 className="font-semibold text-xl text-gray-600 pt-2 pb-2">PRICE DETAILS</h1>
          <Divider orientation="horizontal"></Divider>
          <div className="flex flex-col items-start">
          <section className="p-3 pb-0 flex flex-row justify-between w-full">
          <p className="ml-3 mt-3">Price (2 Items)</p>
          <p className="font-semibold ml-2 mt-3">₹{priceDetails.totalPrice}</p>
          </section>
          <section className="p-3 flex flex-row justify-between w-full">
          <p className="ml-3 mt-2">Discount </p>
          <p className="font-semibold ml-2 mt-2 text-green-500">− ₹16</p>
          </section>
          <section className="p-3 flex flex-row justify-between w-full">
          <p className="ml-3 mt-2">Buy more & save more</p>
          <p className="font-semibold ml-2 mt-2 text-green-500">− ₹77</p>
          </section>
          <section className="p-3 flex flex-row justify-between w-full">
          <p className="ml-3 mt-2">Delivery Charges</p>
          <p className="font-semibold ml-2 mt-2 text-green-500">Free</p>
          </section>
          <section className="p-3 flex flex-row justify-between w-full">
          <p className="ml-3 mt-2">Protect Promise Fee</p>
          <p className="font-semibold ml-2 mt-2">₹118</p>
          </section>
          
          </div>
          <Divider orientation="horizontal"
          className="pl-5 pr-5" sx={{
        borderBottom: '1px dotted rgba(0, 0, 0, 0.3)',
        marginLeft:'10px',
        marginRight:'10px' // or any color you like
      }}
    />
          
          <section className="flex flex-row justify-between w-full p-3">
            <h1 className="ml-3 text-xl font-semibold">Total Amount</h1>
            <h1 className="font-semibold text-xl">₹{priceDetails.totalPrice-16-77+118}</h1>
          </section>
          <Divider
          orientation="horizontal"
          sx={{
        borderBottom: '1px dotted rgba(0, 0, 0, 0.3)',
        marginLeft:'10px',
        marginRight:'10px' // or any color you like
      }}
          >
          </Divider>
          <h1 className="text-green-500 font-semibold mt-3 mb-3 pb-3">You will save ₹17,392 on this order</h1>
          
        </div>
        </div>
        </div>
    )
}
export default CartHomePage