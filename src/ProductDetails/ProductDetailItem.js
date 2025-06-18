import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
function ProductDetailItem({productId,productName,productUrl,setSnackBarState}){
    const [itemSelection,setItemSelection]=useState({
        favouriteColor:'white',
    })
    async function handleOnAddToCartButtonClick(event,productId){
        event.preventDefault();
        console.log("The Add to Cart Event value is ",event);
        const requestBody={
            id:productId,
            quantity:1
        }
        const result=await axios.post('http://localhost:8080/add-to-cart',requestBody,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log("The result of adding the product to cart is ",result);
        setSnackBarState(true);

    }
    async function addItemOrRemoveItemToWishList(){
           setItemSelection({
            ...itemSelection,
            favouriteColor:itemSelection.favouriteColor==='red'?'white':'red'
           })
           if(itemSelection.favouriteColor==='white'){
        const result=await axios.post('http://localhost:8080/add-to-wishlist',{
            id:productId,
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    else{
       const result=await axios.delete('http://localhost:8080/delete-from-wishlist',{
        headers:{
            'Content-Type':'application/json'
        },
        data:{
            id:productId,
           }
       }
       )
    }
    }
    useEffect(()=>{
        console.log("The Product Id in useEffect is ",productId);
          async function fetchFavouriteItems(){
            const result=await axios.get('http://localhost:8080/get-items-of-wishlist',{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const favouriteItems=result.data;
            console.log("The Favourite Items are ",favouriteItems);
          if(favouriteItems.some(item => item.id === productId)){
            setItemSelection({
                ...itemSelection,
                favouriteColor:'red'
            })
          }
          }
          fetchFavouriteItems();
          
    },[])
    return (
        <form className=" relative w-full h-[200px] flex flex-row bg-white p-4 m-3 rounded mr-10" onSubmit={(event)=>handleOnAddToCartButtonClick(event,productId)}>
        {console.log("ENtered the Product Detail Item")}
             <img src={productUrl} className=""></img>
             <section className="flex flex-col items-start w-full">
             {/* <section className="flex flex-row justify-between w-full"> */}
             <p className="font-semibold text-xl ml-4 hover:text-blue-500">{productName}</p>
             {/* </section> */}
             
                <p className="ml-4 text-sm">Panel Type: IPS Panel</p>
                <p className="ml-4 text-sm">VGA Support | HDMI</p>
                <p className="ml-4 text-sm">Inbuilt Speaker</p>
                <p className="ml-4 text-sm">Brightness: 500 nits</p>
                <p className="ml-4 text-sm">Response Time: 6 ms | Refresh Rate: 144 Hz</p>
             </section>
             <div className="mt-1 absolute bottom-6 right-40 mr-3" onClick={()=>addItemOrRemoveItemToWishList()}>
             {itemSelection.favouriteColor==='red'?<FavoriteIcon sx={{color:itemSelection.favouriteColor}}/>
             :<FavoriteBorderIcon sx={{}}/>}
             </div>
             <section className="flex-shrink-0 font-semibold flex flex-col items-start">
             <p className=" text-xl ">₹26,607</p>
             <section className="flex flex-row text-sm font-semibold">
             <p className="line-through">₹34,607</p>
             <p className="ml-2 text-green-500 ">54% off</p>
             </section>
             <p className="text-sm">Free Delivery</p>
             <p className="text-sm text-green-500">Bank Offer</p>
             <p className="text-sm">Or Pay ₹14,607 + 100</p>
             <section className="flex flex-row gap-3">
             
             <button className="border rounded bg-orange-500 p-2 mt-3" >Add To Cart</button>
             </section>
             </section>
        </form>
    )
}
export default ProductDetailItem;