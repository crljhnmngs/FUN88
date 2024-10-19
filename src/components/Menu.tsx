import React, {useMemo} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { categories } from '../data/categories';
import { ReactComponent as Search } from '../assets/icons/search.svg';


export const Menu = () => {
    const Categories = useMemo(() => {
        return categories;
    }, []);
    return (
        <div className='w-full h-[34rem] mt-1 pl-2'>
            <div className='w-full flex'>
                <div className='flex flex-col items-center w-16 cursor-pointer'>
                    <Search 
                    className={'cursor-pointer text-primary w-6'}
                    style={{ stroke: '#00A6FF' }}
                    />
                    <p className='font-normal text-base text-sm'>SEARCH</p>
                </div>
                <div className="border-l-2 border-gray-300 h-10 ml-2 mr-1 mt-1"></div>
                    <Swiper
                    spaceBetween={15}
                    slidesPerView={5}
                    >
                        {Categories.map((e, i) => (
                            <SwiperSlide key={i}>
                                <div className='flex flex-col items-center w-14 cursor-pointer'>
                                    <e.icon
                                    className={'cursor-pointer text-primary w-6'}
                                    style={{ fill: '#00A6FF' }} // #888888 Unactive color
                                    />
                                    <p className='font-normal text-base text-sm'>{e.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </div>
    )
}
