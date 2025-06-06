import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge } from '@mui/material';
function Header(){
return (
    <div className="w-full h-[60px] bg-blue flex flex-row items-center justify-between shadow-md">
        <h1 className="font-bold  text-2xl text-gray-500 ml-[50px]">Zyara</h1>
       
            
            <input type='search' className=' border border-gray-500 h-[65%] w-[400px] rounded p-2 pl-5 ' placeholder='Type to Search'></input>
        
        <div className='items-center flex mr-[50px]'>
        <section name="Profile" className='flex ml-3 mr-3 items-center'>
        <AccountCircleOutlinedIcon
        sx={{
            height:45,
            width:45,
            stroke: "#ffffff",
            strokeWidth:1
        }}
            
        ></AccountCircleOutlinedIcon>
        <p className='font-semibold ml-2'>Login</p>

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
        />
        </Badge>
        <p className='ml-2 font-semibold'>Cart</p>

        </section>
        
        
        
        </div>
    </div>
)
}
export default Header;