import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, IconButton, Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { conButton, Slider } from "@mui/material";
import { data } from 'react-router-dom';
function CartItem({imageUrl,productName,productPrice,productId,setTotalPrice,totalPrice}){
    const[snackBarState,setSnackBarState]=useState(false);
    const [itemQuantity,setItemQuantity]=useState(1);
    
    async function handleOnIncreaseCartItemClick(){
        console.log("The Product Id in handleOnIncreaseCartItemClick is ",productId,itemQuantity+1)
        const result=await axios.put('http://localhost:8080/update-cart',{
            id:productId,
            quantity:itemQuantity+1
        },{
            headers:{
                'Content-Type':'application/json'
            },
            
        })
        setItemQuantity(itemQuantity+1);
    }
    const action = (
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          );
        function handleClose(){
            setSnackBarState(false);
        }
    async function handleOnLessenCartItemClick(){
        if(itemQuantity>=1){
            const result=await axios.put('http://localhost:8080/update-cart',{
                id:productId,
                quantity:itemQuantity-1
            },{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setItemQuantity(itemQuantity-1);
        }
    }
    async function handleOnRemoveCartItem(productIdNo){
        const removeCartItem=await axios.delete('http://localhost:8080/remove-from-cart',{
            headers:{
                 'Content-Type':'application/json'
            },
            data:productIdNo
        })
        setTotalPrice({
            totalPrice:totalPrice-productPrice})
    }
    async function handleOnBuyNowClick(){
        console.log("The Product Id is ",productId)
            const result=await axios.post('http://localhost:8080/add-orders',{
                userEmail:'nikhil123@gmail.com',
                productId:productId,
            },{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            handleOnRemoveCartItem(productId)
            setSnackBarState(true);
    }

    return (
        <div className=" h-[350px] flex flex-col bg-white shadow-sm m-2 rounded">
         {  
                     <Snackbar
                 open={snackBarState}
                 autoHideDuration={6000}
                 onClose={handleClose}
                 message="Order Placed Successfully"
                 action={action}
               />
                 }
        <div className='flex flex-row text-start'>
        <img src={imageUrl}
        className='w-[150px] h-[200px] mt-10 ml-10'
        ></img>
        <div className='flex flex-col w-full'>
        <section className='flex flex-row mt-10 ml-4  w-[90%] justify-between'>
        <p className="font-semibold ml-4 overflow-hidden text-ellipsis whitespace-nowrap w-[60%]">productName</p>
        <p className='text-sm ml-3 pt-1'>Delivery by Thu Jun 19 |  ₹40 Free</p>
        </section>
        <section className='flex flex-row  ml-4'>
        <p className='ml-4 text-gray-500'>Seller:OmniTechRetail</p>
        </section>
        <section className='flex flex-row mt-10 ml-4'>
        <p className="font-semibold text-xl ml-4">Price : ₹{productPrice}</p>
        <p className="text-green-600 ml-3 mt-1 font-semibold">34% Off 19 offers available</p>
        </section>
        <section className='flex flex-row mt-2 ml-4'>
            <p className='ml-4 text-sm font-semibold text-gray-500'>+ ₹79 Protect Promise Fee</p>
        </section>
        <section className='flex flex-row mt-2 ml-4'>
            <p className='ml-4 text-sm font-semibold text-gray-500'>Or Pay ₹16,890 +  100</p>
        </section>
        
        </div>
        </div>
        <section className='flex flex-row ml-10 mt-5'>  
        <RemoveIcon className='mt-4' onClick={()=>handleOnLessenCartItemClick()}/>
        <div className='border border-black rounded h-fit p-1 pl-3 pr-3 w-fit mt-3'>{itemQuantity}</div>
        <AddIcon className='mt-4' onClick={()=>handleOnIncreaseCartItemClick()}/>
        <button className='font-semibold ml-10 hover:text-blue-500 p-3 '>SAVE FOR LATER</button>
        <button className='ml-10' onClick={()=>handleOnRemoveCartItem(productId)}>
            <h1 className='font-semibold hover:text-blue-500'>REMOVE</h1>
        </button>
        <button className='m-2 rounded ml-10' onClick={()=>handleOnBuyNowClick()}>
        <h1 className='font-semibold bg-orange-500 p-2 rounded'>BUY NOW</h1>
        </button>
        </section>
        
        </div>
    )
}
export default CartItem;