import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge } from '@mui/material';
import ZyaraLogo from '../assets/ZyaraLogo.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
function Header(){
    const navigate=useNavigate();
    function getItemsOfWishlist(){
        navigate('/wishlist')
    }
    function handleOnCartClick(){
             navigate('/cart')
    }
    function handleOnProfileIconClicked(){
        navigate('/login')
    }
return (
    <div className="fixed w-full h-[60px] bg-white flex flex-row items-center justify-between shadow-md ">
        {/* <h1 className="font-bold  text-4xl text-blue-500 ml-[50px]">Zyara</h1> */}
        <img src={ZyaraLogo} className='h-[90%] ml-[50px]'></img>
       
            <div className='relative'>
            <SearchOutlinedIcon className='absolute top-2 left-2'/>
            <input type='search' className=' border border-gray-500 h-[65%] w-[450px] rounded p-2 pl-10  bg-blue-50 ' placeholder='Search for Products, Brands and more'></input>
            </div>
        <div className='items-center flex mr-[50px]'>
        <section name="Profile" className='flex ml-3 mr-3 items-center'>
        <AccountCircleOutlinedIcon
        sx={{
            height:45,
            width:45,
            stroke: "#ffffff",
            strokeWidth:1
        }}
            onClick={()=>handleOnProfileIconClicked()}
        ></AccountCircleOutlinedIcon>
        <p className='font-semibold ml-2'>Login</p>

        </section>
        <section className='flex ml-3 mr-3 items-center mt-1'>
        <FavoriteBorderIcon sx={{
            height:40,
            width:40,
            stroke: "#ffffff",
            strokeWidth:1
        }}
            onClick={()=>getItemsOfWishlist()}
        />
        <p className='font-semibold ml-2'>Wishlist</p>
        </section>
        <section className='flex ml-3 mr-3 items-center mt-1' name="Cart">
        <Badge badgeContent={4} color="primary">

        <ShoppingCartOutlinedIcon className='' 
        sx={{
            height:40,
            width:40,
            stroke: "#ffffff",
            strokeWidth:1
        }}
        onClick={handleOnCartClick}
        />
        </Badge>
        <p className='ml-2 font-semibold'>Cart</p>

        </section>
        
        
        
        </div>
    </div>
)
}
export default Header;