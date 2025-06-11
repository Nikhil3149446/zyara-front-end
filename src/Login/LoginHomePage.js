function LoginHomePage(){
    return (
        <div className="w-full min-h-screen bg-gray-300 gap-2 mt-[60px] flex flex-row">
            <div className="w-[30%] min-h-screen m-3 rounded bg-white mr-1">
                <p>MY ORDERS</p>
            </div>
            <div className="w-[70%] min-h-screen m-3 rounded bg-white items-center justify-center flex flex-col ml-1">
                  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myaddresses-empty_3b40af.png"></img>
                  <h1 className="font-semibold text-xl">No Addresses found in your account!</h1>
                  <p className="">Add a Delivery Address</p>
                  <button className="p-3 pl-5 pr-5 rounded bg-blue-500 font-semibold mt-4 ">ADD ADDRESSES</button>
            </div>

        </div>
    )
}
export default LoginHomePage;