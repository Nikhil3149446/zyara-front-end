import { Fragment } from "react";

function ProductCategory(){
    const images={
        'Kilos':'https://th.bing.com/th/id/OIP.gY-RbTVs04v13f4x2ca4cAHaGL?rs=1&pid=ImgDetMain',
        'Mobile':'https://thumbs.dreamstime.com/b/high-detailed-realistic-green-smartphone-back-front-view-duo-camera-back-side-phone-frameless-trendy-cellphone-168314439.jpg',
        'Fashion':'https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-business-young-woman-model-white-coat-jacket-hipster-cloth-jeans_158538-2815.jpg?semt=ais_items_boosted&w=740',
        'Electronics':'https://img.freepik.com/premium-photo/laptop-headphone-isolated-white_93675-73371.jpg?ga=GA1.1.625485697.1749292696&semt=ais_items_boosted&w=740',
        'Home & Furniture':'https://img.freepik.com/free-psd/view-sofa-interior-design-decor_23-2151772815.jpg?ga=GA1.1.625485697.1749292696&semt=ais_items_boosted&w=740',
        'Appliances':'https://img.freepik.com/premium-vector/group-household-appliances-with-red-gift-ribbon-bow-refrigerator-microwave-tv-washing-machine-gas-stove-isolated-white-background-3d-rendering-realistic-vector-illustration_545793-1096.jpg?ga=GA1.1.625485697.1749292696&semt=ais_items_boosted&w=740',
        'Flight Booking':'https://img.freepik.com/free-psd/isolated-plane-details_23-2151839972.jpg?ga=GA1.1.625485697.1749292696&semt=ais_items_boosted&w=740',
        'Beauty Toys & More':'https://img.freepik.com/free-psd/view-children-s-stuffed-animal_23-2151517687.jpg?ga=GA1.1.625485697.1749292696&semt=ais_items_boosted&w=740',
    }
    return (
        <Fragment>
            <div className=" flex flex-row w-[99%] gap-3 justify-between shadow-sm h-[120px] bg-white ml-2 mt-2 rounded">
              {
                Object.entries(images).map(([key,value])=>{
                    return (
                        <div className="flex flex-col justify-between items-center">
                        
                            <img src={value} className="w-[65px] h-[70%] ml-2 mt-1"></img>
                            <p className="mr-1 mb-1 font-semibold">{key}</p>
                            
                        </div>
                    )
              })
              }
            </div>
        </Fragment>
    )
}
export default ProductCategory;