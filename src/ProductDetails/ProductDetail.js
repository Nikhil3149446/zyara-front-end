import { useLocation } from "react-router-dom";
import ProductDetailItem from "./ProductDetailItem";
import { Box, Button, Divider, IconButton, Slider, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

function ProductDetails(){
    const[snackBarState,setSnackBarState]=useState(false);
    const [productDetailData,setProductDetailData]=useState([]);
    const location=useLocation();
    async function getProductByCategoryId(){
        const result= await axios.get(`http://localhost:8080/api/categories/all/speciality-categories/${location.state.productName}`)
        console.log("The Product Details is ",result.data)
        return result.data;
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
    useEffect(() => {
        async function fetchData() {
          try {
            const value = await getProductByCategoryId(); 
            setProductDetailData(value); 
          } catch (error) {
            console.error("Error fetching product detail data:", error);
          }
        }
    
        fetchData();
      }, [location.state.productName]);
    return (
        <div className="w-full min-h-screen mt-[60px] bg-gray-300 flex flex-row">
        {  
            <Snackbar
        open={snackBarState}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Added to Cart"
        action={action}
      />
        }
        <div className="w-[20%]  m-3 bg-white rounded text-left">
        <h1 className="font-semibold text-2xl mt-5 ml-5 mb-3">Filters</h1>
        <Divider orientation="horizontal"/>
        <h1 className="font-semibold ml-4 mt-4">CATEGORIES</h1>
        <section className="font-semibold ml-6 mt-1 mb-5 text-sm text-gray-500 flex gap-2 flex-col">
        <h1>Category 1</h1>
        <h1>Category 1</h1>
        <h1>Category 1</h1>
        </section>
        <Divider orientation="horizontal"/>
        <section className="font-semibold ml-4 mt-3 mb-5 flex flex-col w-full ">
            <h1>PRICE</h1>
            <Box sx={{ width: 230 }}>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
        </section>
        <Divider orientation="horizontal"/>
        <section className="font-semibold text-sm ml-4 mt-5 flex flex-col gap-4 w-full">
            <h1>BRAND</h1>
            <h1>DISCOUNT</h1>
            <h1>SIZE</h1>
            <h1>COLOR</h1>
            <h1>PATTERN</h1>
            <h1>TYPE</h1>
            <h1>OFFERS</h1>
        </section>
        </div>
        <div className="w-[70%] min-h-screen pr-5">
       { productDetailData.length!==0 && productDetailData.map((key,index)=>{
        {console.log("The Key.Image value is",key.image)}
            return (
                <ProductDetailItem productId={key.id} productName={key.description} productUrl={key.image} key={index} setSnackBarState={setSnackBarState}/>
            )
       })}
        {console.log("The Product details is ",productDetailData)}
        </div>
        </div>
    )
}
export default ProductDetails;