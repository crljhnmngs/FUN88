import React from 'react'
import hero from '../assets/images/hero.webp'
import bell from '../assets/icons/bell.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='w-full h-[220px] pt-1 px-3'>
          <Slider {...settings}>
            <img src={hero} className='w-full'  alt="HeroImage" />
            <img src={hero} className='w-full'  alt="HeroImage" />
            <img src={hero} className='w-full'  alt="HeroImage" />
            <img src={hero} className='w-full'  alt="HeroImage" />
            <img src={hero} className='w-full'  alt="HeroImage" />
          </Slider>
        <div className='flex h-8 items-center gap-1'>
            <img src={bell} className='size-4'  alt="BellIcon" />
            <p className='font-normal text-primary text-sm'>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</p>
        </div>
    </div>
  )
}
