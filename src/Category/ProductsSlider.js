import Slider from "react-slick";


function ProductsSlider(){
    const settings = {
        infinite: true, 
        speed: 2000, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
      };
    const productSliderImage={
        'Image1':'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/cc08176877cb794a.png?q=80',
        'Image2':'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a20f7f7de7954f9b.jpeg?q=80',
        'Image3':'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8605330959dd528f.jpeg?q=80',
        'Image4':'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/11980ec333f6aa03.jpg?q=80',
        'Image5':'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/49c336ca72c1dcba.jpg?q=80',
        'Image6':'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=80'
    }
    return (
        <div className="w-full mx-auto overflow-hidden p-2 mt-3">
            <Slider {...settings}>
                  {
                    Object.entries(productSliderImage).map(([key,value])=>{
                        return (
                            <div className="">
                                <img src={value} className="w-full h-auto object-cover"></img>
                            </div>
                        )
                    })
                  }

            </Slider>
        </div>
    )
}
export default ProductsSlider;