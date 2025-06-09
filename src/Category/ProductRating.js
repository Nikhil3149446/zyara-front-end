import axios from "axios"
import { Fragment, useEffect, useState } from "react";

function ProductRating({ratingValue}){
    const [popularProduct,setPopularProduct]=useState([])
    async function fetchPopularProducts(){
         var rating=5;
         if(ratingValue.includes("2")){
            rating=2;
            console.log("The rating value contains the 2") 
        }
        else if(ratingValue.includes("3")){
            rating=3;
            console.log("The rating value contains the 3") 
        }
        else if(ratingValue.includes("4")){
            rating=4;
            console.log("The rating value contains the 4") 
        }
        else if(ratingValue.includes("5")){
            rating=5;
            console.log("The rating value contains the 5") 
        }
        console.log("The rating value is",rating)
       
         const result=await axios.post('http://localhost:8080/api/categories/popular-categories',rating,{
            headers:{
                'Content-Type':'application/json'
            }
         })
         console.log("The result of fetching the Popular Products is ",result);
          const resultData=result.data.slice(0,7)
         setPopularProduct( resultData )
        //  set
    }
    useEffect(()=>{
        fetchPopularProducts()
    },[])
    return (
        <div className="flex flex-row gap-10 ml-2">
        
        {popularProduct.map((key,index)=>{
            return (
                <div className="flex flex-col ">
             <img src={key.image} className="w-[156px] h-[155px] object-fit"></img>
             <p className="font-semibold">{key.description.slice(0,7)}</p>
        </div>
            )
        })
        }
        </div>
    )
}
export default ProductRating;