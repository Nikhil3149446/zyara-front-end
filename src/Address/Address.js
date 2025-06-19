import { useEffect, useState } from "react";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from "@mui/material";
import axios from "axios";
function Address(){
    const [address,setAddress]=useState({
        addAddress:false,
        addressArra:[1]
    });
    async function handleOnAddAddressClick(event){
        event?.preventDefault();
        const landmark=event.target[0].value;
        const city=event.target[1].value;
        const country=event.target[2].value;
        const phoneNumber=event.target[3].value;
        const address=event.target[4].value;   
        const pinCode=event.target[5].value;
        const state=event.target[6].value;
        console.log("The value of landmark is ",landmark);
        console.log("The value of city is ",city);  
        console.log("The value of country is ",country);
        console.log("The value of phoneNumber is ",phoneNumber);
        console.log("The value of address is ",address);
        console.log("The value of pinCode is ",pinCode);
        const addressObject={
            landmark:landmark,
            city:city,
            country:country,
            phoneNumber:phoneNumber,
            address:address,
            pincode:pinCode,
            state:state
        }
        const result=await axios.post('http://localhost:8080/add-address-to-cart',addressObject,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        
        setAddress(
            {...address,
            addAddress:false
        }
        );
    }
    useEffect(()=>{
        async function getAllAddress(){
            const result=await axios.get('http://localhost:8080/get/all-addresses-in-cart',{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            console.log("Entered the Use Effect of Address atleast",result.data);
            setAddress({
                ...address,
                addressArra:result.data
            })
        }
        getAllAddress();
    },[address.addAddress])
    return (
        <div className="w-full min-h-screen bg-gray-300 gap-2 mt-[60px] flex flex-row">
            <div className="w-[30%] min-h-screen m-3 rounded bg-white mr-1 items-start flex flex-col">
            <section className="flex flex-row mt-[30px] w-full mb-5 ">
                <AnalyticsIcon className=" ml-10" ></AnalyticsIcon>
                <p className="font-semibold ml-2">MY ORDERS</p>
            </section>
            <Divider orientation="horizontal" className="w-full"/>
            <div className="mt-[30px] flex flex-col ml-10 w-full mb-10">
                <section className="flex flex-row">
                <PersonIcon className=""></PersonIcon>
                <p className="font-semibold  ml-2">ACCOUNT SETTINGS</p>
                </section>
                <section className="flex flex-col mt-4 items-start ml-12 gap-7 font-semibold text-gray-500">
                <button >Profile Information</button>
                <button>Manage Address</button>
                <button>PAN Card Information</button>
                </section>

            </div>
            <Divider orientation="horizontal" className="w-full"/>
            <div className="mt-[30px] flex flex-col ml-10 mb-10">
            <section className="flex flex-row">
            <AccountBalanceWalletIcon/>
            <p className="font-semibold ml-2">PAYMENTS</p>
            </section>
            <section className="flex flex-col mt-4 items-start ml-12 gap-7 font-semibold text-gray-500">
                <button >Gift Card</button>
                <button>Saved UPI</button>
                <button>Saved Cart</button>
                </section>
                
            </div>
            <Divider orientation="horizontal" className="w-full"/>
            <div className="mt-[30px] flex flex-col ml-10">
            <section className="flex flex-row">
            <FolderSharedIcon/>
            <p className="font-semibold ml-2">MY STUFFS</p>
            </section>
            <section className="flex flex-col mt-4 items-start ml-12 gap-7 font-semibold text-gray-500">
                <button >My Coupons</button>
                <button>My Reviews and Ratings</button>
                <button>All Notifications</button>
                </section>
                
            </div>
            </div>
            {console.log("The value of address1 is ",address.addressArra)}
            {!address.addAddress && address.addressArra!==undefined && address.addressArra.length!==0 && 
            <div className="w-[70%] min-h-screen m-3 rounded bg-white flex flex-col ml-1 p-2">
            <button className="flex flex-row ml-5 mt-10 w-[95%] border border-blue-500 mr-5 p-3" onClick={()=>setAddress({...address,addAddress:true})}>
                <AddIcon sx={{color:'blue'}}/>
                <p className="ml-2 font-semibold text-blue-600"> ADD A NEW ADDRESS</p>
            </button>
            {address.addressArra.map((key,index)=>{
                return (
                <div className="p-3 font-semibold flex flex-col text-start ml-5 border border-blue-500 mt-10">
            <p>Home</p>
            <p>Nikhil    7876943397</p>
            <p>{key.address}</p>
            </div>
                )
            })}
            </div>}
           {!address.addAddress && address.addressArra!==undefined && address.addressArra.length===0 && <div className="w-[70%] min-h-screen m-3 rounded bg-white items-center justify-center flex flex-col ml-1">
                  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myaddresses-empty_3b40af.png"></img>
                  <h1 className="font-semibold text-xl">No Addresses found in your account!</h1>
                  <p className="">Add a Delivery Address</p>
                  <button className="p-3 pl-5 pr-5 rounded bg-blue-500 font-semibold mt-4 " onClick={()=>setAddress({
                    ...address,
                    addAddress:true
                  })}>ADD ADDRESSES</button>
            </div>}
            {address.addAddress && <form className="w-[70%] min-h-screen m-3 rounded bg-white flex flex-col ml-1 " onSubmit={(event)=>handleOnAddAddressClick(event)}>
            <section className="flex flex-row justify-start mt-[60px] ml-10">
                <input className=" border border-blue-500 p-3 w-[33%]" placeholder="LandMark"></input>
                <input className=" border border-blue-500 p-3 w-[33%] ml-4" placeholder="City"></input>
            </section>
            <section className="flex flex-row justify-start mt-[10px] ml-10">
                <input className=" border border-blue-500 p-3 w-[33%]" placeholder="Country"></input>
                <input className=" border border-blue-500 p-3 w-[33%] ml-4" placeholder="Phone Number"></input>
            </section>
            <textarea className="border border-blue-500 w-[65%] h-[100px] ml-10 mt-4 p-3" placeholder="Address"></textarea>
            <section className="flex flex-row justify-start mt-[10px] ml-10">
                <input className=" border border-blue-500 p-3 w-[33%]" placeholder="Pin Code"></input>
                <input className=" border border-blue-500 p-3 w-[33%] ml-4" placeholder="State"></input>
            </section>
            <p className=" flex justify-start ml-12 mt-4 items-start font-semibold text-sm text-gray-500 ">Address Type</p>
            <section className="flex flex-row justify-start mt-[10px] ml-12">
                <input type="radio" className="mr-5 border border-black" name="Address Type" value="Home" ></input>Home
                <input type="radio" className=" ml-5 mr-5 border border-black" name="Address Type" value="Work" ></input>Work
            </section>
            <section className="flex flex-row justify-start mt-[30px] ml-12">
                <button className="p-3 bg-blue-500 text-white w-[200px] rounded font-semibold">SAVE</button>
                <button className="p-3 text-blue-500 ml-8 font-semibold" onClick={()=>setAddress({...address,addAddress:false})}>CANCEL</button>
            </section>

            
            </form>
            }

        </div>
    )
}
export default Address;