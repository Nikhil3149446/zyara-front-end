import ProductRating from './Category/ProductRating';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import ProductCategory from './Category/ProductCategory';
import ProductsSlider from './Category/ProductsSlider';
function Home(){
    const [open,setOpen]=useState({
        isOpen:false,
        ratingStat:'',
        anchorEl:'rating-status',
        
      });
      function handleOnClose(value){
        console.log("Clicked the handleOnClose ",value)
           setOpen({
            ...open,
            isOpen:!open.isOpen,
            ratingStat:value,
            
           });
      }
      function handleOnRatingButtonClicked(){
        setOpen({
          ...open,
          isOpen:!open.isOpen
        })
      }
    return (
        <div className='mt-[60px] items-start flex flex-col'>
            <ProductCategory/>
      <ProductsSlider/>
      <button className='w-[70px] pb-2 pt-2 bg-green-300 m-3 rounded'
      
      aria-controls={open.anchorEl?'rating-status':undefined}
            aria-haspopup='true'
            aria-expanded={open.anchorEl?'true':'false'}
            onClick={handleOnRatingButtonClicked}
            >
           <p className='font-semibold'>Rating</p>
      </button>
      <ProductRating ratingValue={open.ratingStat} key={open.isOpen}/>
      <Menu
             id='rating-status'
             open={open.isOpen}
             anchorEl={open.anchorEl}
             onClose={handleOnClose}
             MenuListProps={{
                "aria-labelledby":'rating-menu'
             }}
            >
               <MenuItem onClick={()=>handleOnClose('Equal or More than 5')}>Equal or More than 5</MenuItem>
               <MenuItem onClick={()=>handleOnClose('Equal or More than 4')}>Equal or More than 4</MenuItem>
               <MenuItem onClick={()=>handleOnClose('Equal or More than 3')}>Equal or More than 3</MenuItem>
               <MenuItem onClick={()=>handleOnClose('Equal or More than 2')}>Equal or More than 2</MenuItem>
            </Menu>
        </div>
    )
}
export default Home;