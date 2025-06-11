import ProductRating from './Category/ProductRating';
// import { Box, FormControl, InputLabel, Menu, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ProductCategory from './Category/ProductCategory';
import ProductsSlider from './Category/ProductsSlider';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Menu, ratingClasses } from '@mui/material';
function Home(){
    const [open,setOpen]=useState({

        ratingStat:'',
        anchorEl:null,
        
      });
      const isOpen=Boolean(open.anchorEl);
      function handleOnClose(value) {
        console.log("Clicked the handleOnClose ", value);
        if(open.ratingStat && open.ratingStat instanceof HTMLElement){
        setOpen({
          ...open,
          anchorEl: null,
          ratingStat: value,
        });
      }
      else {
        setOpen({
            ...open,
            anchorEl:null
        })
      }
    }
      function handleOnRatingButtonClicked(event) {
        setOpen((prev)=>({
          ...prev,
          anchorEl: prev.anchorEl ? null : event.currentTarget,
        }));
      }
    return (
        <div className='mt-[60px] items-start flex flex-col'>
      <ProductCategory/>
      <ProductsSlider/>
<button
  className='w-[70px] pb-2 pt-2 bg-green-300 m-3 rounded'
  aria-controls={isOpen ? 'rating-status' : undefined}
  aria-haspopup='true'
  aria-expanded={isOpen ? 'true' : 'false'}
  onClick={handleOnRatingButtonClicked}
>
  Rating
</button>
      {console.log("The value of ratingStat is ",open.ratingStat)}
      <ProductRating ratingValue={open.ratingStat} key={isOpen}/>
      <Menu
             id='rating-status'
             open={isOpen}
             anchorEl={open.anchorEl}
             onClose={handleOnClose}
             anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
             MenuListProps={{
                "aria-labelledby":'rating-menu'
             }}
             
  sx={{
    mt: 4, // ✅ Push menu down (1 theme spacing unit = 8px)
  }}
            >
               <MenuItem onClick={()=>handleOnClose(5)}>Equal or More than 5</MenuItem>
               <MenuItem onClick={()=>handleOnClose(4)}>Equal or More than 4</MenuItem>
               <MenuItem onClick={()=>handleOnClose(5)}>Equal or More than 3</MenuItem>
               <MenuItem onClick={()=>handleOnClose(2)}>Equal or More than 2</MenuItem>
               <MenuItem onClick={()=>handleOnClose(1)}>Equal or More than 1</MenuItem>
            </Menu>
        </div>
    )
}
export default Home;