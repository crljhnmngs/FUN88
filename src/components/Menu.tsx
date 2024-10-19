import React, {useMemo, useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { categories } from '../data/categories';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchGames } from '../redux/actions';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { Games } from './Games';

export const Menu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.games);
    const favorites = useSelector((state: RootState) => state.favorites.favorites);
    const [currentCategory, setCurrentCategory] = useState<string>("START");
    const activeFooter = useSelector((state: RootState) => state.footer.activeFooter);

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    const handleFavorite = (gameId: number) => {
        if (favorites.includes(gameId)) {
            dispatch(removeFavorite(gameId));
        } else {
            dispatch(addFavorite(gameId));
        }
    };

    const Categories = useMemo(() => {
        return categories;
    }, []);

    const handleCategoryClick = (categoryName: string) => {
        setCurrentCategory(categoryName);
    };

    return (
        <div className='w-full h-[34rem] mt-1'>
            {activeFooter === "FAVORITES" ? 
                <div className='w-full h-[34rem] mt-1 pl-2 pt-[19px]'>
                    <p className='text-primary font-semibold text-lg pl-2'>FAVORITES GAMES</p>
                    <Games 
                        loading={loading}
                        items={items}
                        error={error}
                        favorites={favorites}
                        handleFavorite={handleFavorite}
                        currentCategory={currentCategory}
                        filterBy="FAVORITES"
                    />
                </div>
            :
                <React.Fragment>
                    <div className='w-[98%] flex mx-2'>
                        <div 
                        className='flex flex-col items-center w-16 cursor-pointer'
                        onClick={() => handleCategoryClick("SEARCH")}
                        >
                            <Search 
                            className={'cursor-pointer text-primary w-6'}
                            style={{ stroke: currentCategory === "SEARCH" ? '#00A6FF' : '#888888' }}
                            />
                            <p className={`font-normal text-base text-sm ${currentCategory === "SEARCH" ? 'text-primary underline' : 'text-base'}`}>SEARCH</p>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10 ml-2 mr-1 mt-1"></div>
                            <Swiper
                            spaceBetween={15}
                            slidesPerView={5}
                            >
                                {Categories.map((e, i) => (
                                    <SwiperSlide key={i}>
                                        <div 
                                        className='flex flex-col items-center w-14 cursor-pointer'
                                        onClick={() => handleCategoryClick(e.name)}
                                        >
                                            <e.icon
                                            className={'cursor-pointer text-primary w-6'}
                                            style={{ fill: e.name === currentCategory ? '#00A6FF' : '#888888' }}
                                            />
                                            <p className={`font-normal text-base text-sm ${e.name === currentCategory ? 'text-primary underline' : 'text-base'}`}>{e.name}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                    </div>
                    <div className='w-full h-[34rem] mt-1 pl-2'>
                        <Games 
                            loading={loading}
                            items={items}
                            error={error}
                            favorites={favorites}
                            handleFavorite={handleFavorite}
                            currentCategory={currentCategory}
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    )
}
