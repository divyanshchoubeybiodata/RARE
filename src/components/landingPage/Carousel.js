import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const Carousel = ({ data }) => {

    const PrevArrow = ({ onClick }) => (
        <button
            className="z-20 absolute opacity-85 top-1/2 left-4 transform -translate-y-1/2  text-black rounded-full  focus:outline-none"
            onClick={onClick}
        >
            <IoIosArrowDropleftCircle className='h-8 md:h-10 w-8 md:w-10' />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button
            className="z-20 absolute opacity-85 top-1/2 right-4 transform -translate-y-1/2  text-black rounded-full  focus:outline-none"
            onClick={onClick}
        >
            <IoIosArrowDroprightCircle className='h-8 md:h-10 w-8 md:w-10' />
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500, // Adjust as needed
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        // afterChange: (index) => {
        //     handleSlideChange(index);
        // }
    };

    return (
        <div className="w-full relative">
            <Slider {...settings}>
                {data?.map((item, index) => {
                    return (
                        <div key={`${index}=${item.id}`} className="text-gray-700 h-full serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl lg:text-2xl flex justify-center items-center">
                        <div>
                          <div className='px-4'>{item.content}</div>
                          <div className='flex flex-col items-center mt-10'>
                            <img src={item?.image} alt="author-image" className='h-16 w-16 rounded-full' />
                            <h4 className='text-lg font-mono mt-3 mb-2'>{item.author}</h4>
                            <h5 className='text-sm font-mono'>{item.position}</h5>
                          </div>
                        </div>
                      </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Carousel;
