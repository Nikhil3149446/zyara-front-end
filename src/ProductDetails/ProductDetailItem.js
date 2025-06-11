import axios from "axios";

function ProductDetailItem({productId,productName,productUrl}){
    async function handleOnAddToCartButtonClick(event,productId){
        event.preventDefault();
        console.log("The Add to Cart Event value is ",event);
        const result=await axios.post('http://localhost:8080')

    }
    return (
        <form className="w-full h-[200px] flex flex-row bg-white p-4 m-3 rounded mr-10" onSubmit={(event)=>handleOnAddToCartButtonClick(event,productId)}>
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
             <section className="flex-shrink-0 font-semibold flex flex-col items-start">
             <p className=" text-xl ">₹26,607</p>
             <section className="flex flex-row text-sm font-semibold">
             <p className="line-through">₹34,607</p>
             <p className="ml-2 text-green-500 ">54% off</p>
             </section>
             <p className="text-sm">Free Delivery</p>
             <p className="text-sm text-green-500">Bank Offer</p>
             <p className="text-sm">Or Pay ₹14,607 + 100</p>
             <button className="border rounded bg-orange-500 p-2 mt-3">Add To Cart</button>
             </section>
        </form>
    )
}
export default ProductDetailItem;