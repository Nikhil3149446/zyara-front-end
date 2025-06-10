import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useScrollTrigger } from '@mui/material';
import { useState } from 'react';
function CartItem({imageUrl,productName,productPrice}){
    const [itemQuantity,setItemQuantity]=useState(1);
    function handleOnAddOrRemoveClick(action){

        setItemQuantity(action==='add'?itemQuantity+1:itemQuantity-1);
    }
    return (
        <div className=" h-[350px] flex flex-col bg-white shadow-sm m-2 rounded">
        <div className='flex flex-row'>
        <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/water-purifier/o/m/n/-original-imahapfrxchcy3g3.jpeg?q=90"
        className='w-[150px] h-[200px] mt-10 ml-10'
        ></img>
        <div className='flex flex-col'>
        <section className='flex flex-row mt-10 ml-4'>
        <p className="font-semibold ml-4 overflow-hidden text-ellipsis whitespace-nowrap w-[60%]">Pureit Revito 7 L RO + MF + UV in Tank + Minerals Wate</p>
        <p className='text-sm ml-3 pt-1'>Delivery by Thu Jun 19 |  ₹40 Free</p>
        </section>
        <section className='flex flex-row  ml-4'>
        <p className='ml-4 text-gray-500'>Seller:OmniTechRetail</p>
        </section>
        <section className='flex flex-row mt-10 ml-4'>
        <p className="font-semibold text-xl ml-4">Price : ₹16999</p>
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
        <section className='flex flex-row ml-10 mt-10'>  
        <RemoveIcon className='mt-1'/>
        <div className='border border-black rounded h-fit p-1 pl-3 pr-3 w-fit'>{itemQuantity}</div>
        <AddIcon className='mt-1'/>
        <button className='font-semibold ml-10 hover:text-blue-500 p-3 '>SAVE FOR LATER</button>
        <button className='ml-10'>
            <h1 className='font-semibold hover:text-blue-500'>REMOVE</h1>
        </button>
        
        </section>
        </div>
    )
}
export default CartItem;