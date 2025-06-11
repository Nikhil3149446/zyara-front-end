import { useLocation } from "react-router-dom";
import ProductDetailItem from "./ProductDetailItem";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails(){
    const [productDetailData,setProductDetailData]=useState([]);
    const location=useLocation();
    async function getProductByCategoryId(){
        const result= await axios.get(`http://localhost:8080/api/categories/all/speciality-categories/${location.state.productName}`)
        console.log("The Product Details is ",result.data)
        return result.data;
    }
    useEffect(() => {
        async function fetchData() {
          try {
            const value = await getProductByCategoryId(); // ✅ wait for resolved value
            setProductDetailData(value); // ✅ set actual array
          } catch (error) {
            console.error("Error fetching product detail data:", error);
          }
        }
    
        fetchData();
      }, [location.state.productName]);
    return (
        <div className="w-full min-h-screen mt-[60px] bg-gray-300 flex flex-row">
        <div className="w-[30%]  m-3 bg-white rounded text-left">
        <h1 className="font-semibold text-2xl mt-5 ml-5 mb-3">Filters</h1>
        <Divider orientation="horizontal"/>
        </div>
        <div className="w-[70%] min-h-screen pr-5">
       { productDetailData.length!==0 && productDetailData.map((key,index)=>{
        {console.log("The Key.Image value is",key.image)}
            return (
                <ProductDetailItem productId={key.id} productName={key.description} productUrl={key.image} key={index}/>
            )
       })}
        {console.log("The Product details is ",productDetailData)}
        </div>
        </div>
    )
}
export default ProductDetails;