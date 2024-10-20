import React, {useMemo, useEffect, useState, useCallback, lazy, Suspense} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { categories } from '../data/categories';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Filter } from '../assets/icons/filter.svg';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchGames } from '../redux/actions';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { Games } from './Games';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GameProvider } from '../types';
import useGameProvidersPagination from '../hooks/useGameProvidersPagination';
const GameProviderModal = lazy(() => import('./GameProviderModal'));

export const Menu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.games);
    const favorites = useSelector((state: RootState) => state.favorites.favorites);
    const [currentCategory, setCurrentCategory] = useState<string>("START");
    const activeFooter = useSelector((state: RootState) => state.footer.activeFooter);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const itemsPerPage = 3; 
    const { currentItems, 
            currentPage, 
            totalPages, 
            handlePrev, 
            handleNext } = useGameProvidersPagination(itemsPerPage);
    const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
    const [selectedFilter, SetSelectedFilter] = useState<string | null>(null);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

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

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSelectedProvider(null);
        SetSelectedFilter("NAME");
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleProviderSelect = useCallback((providerName: string) => {
        setSelectedProvider(providerName);
        setIsProviderModalOpen(false);
        setSearchTerm('');
        SetSelectedFilter("PROVIDER")
    }, []);
    
    return (
        <div className='w-full h-[34rem] mt-1'>
            {activeFooter === "FAVORITES" ? 
                <div className='w-full h-[34rem] mt-1 pl-2 pt-[19px]'>
                    <p className='text-primary font-semibold text-lg pl-2'>FAVORITE GAMES</p>
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
                    {currentCategory === "SEARCH" ? (
                        <React.Fragment>
                            <div className='w-full h-[20rem] mt-1 pl-2 overflow-auto hide-scrollbar'>
                                <div className='flex gap-2 h-11'>
                                    <div className="flex items-center bg-white border border-base rounded-md px-4 py-2 w-[85%] max-w-sm focus-within:border-primary">
                                        <Search
                                            className='w-5'
                                            style={{ stroke:'#888888' }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="outline-none flex-grow text-gray-700 bg-transparent pl-2"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <button
                                        className="flex items-center justify-center bg-transparent rounded-md border border-base cursor-pointer p-3"
                                        onClick={() => setIsProviderModalOpen(true)}
                                        >
                                        <Filter
                                            className='w-5'
                                            style={{ stroke:'#888888' }}
                                        />
                                    </button>
                                </div>
                                {selectedFilter === "PROVIDER" &&
                                    <p className='pt-2'>Provider: {selectedProvider}</p> 
                                }
                                
                                <Games 
                                    loading={loading}
                                    items={items}
                                    error={error}
                                    favorites={favorites}
                                    handleFavorite={handleFavorite}
                                    currentCategory={currentCategory}
                                    filterBy={selectedFilter}
                                    searchData={debouncedSearchTerm}
                                    selectedProvider = {selectedProvider}
                                />
                            </div>
                            <div className='mx-2 mt-1'>
                                <div className='flex justify-between'>
                                    <p className='font-normal text-sm'>Proveedores de juego</p>
                                    <div className="flex items-center gap-4">
                                        <button onClick={handlePrev} disabled={currentPage === 0} className="p-1 disabled:opacity-50">
                                            <FaChevronLeft className="text-gray-700" />
                                        </button>
                                        <button onClick={handleNext} disabled={currentPage === totalPages - 1} className="p-1 disabled:opacity-50">
                                            <FaChevronRight className="text-gray-700" />
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-3 overflow-hidden'>
                                    {currentItems.map((e: GameProvider, i: number) => (
                                        <div 
                                        className='min-w-[116px] min-h-[90px] rounded-lg border mt-2 cursor-pointer' 
                                        key={i}
                                        onClick={() => handleProviderSelect(e.name)}
                                        >
                                            <div className='h-[60%] bg-[#e7e7e7] rounded-t-lg flex justify-center items-center'>
                                                <img src={e.img} className='w-20'  alt="Provider Logo" />
                                            </div>
                                            <div className='h-[40%] bg-[#f3f3f3] rounded-b-lg flex flex-col justify-center items-center'>
                                                <p className='font-normal text-[13px] text-back pt-1'>{e.name}</p>
                                                <p className='font-normal text-[11px] text-base -mt-2'>{e.numberOfGames} juegos</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> 
                        </React.Fragment>
                    ) : (
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
                        )
                    }
                </React.Fragment>
            }
            <Suspense fallback={<div>Loading...</div>}>
                {isProviderModalOpen && (
                    <GameProviderModal
                        isOpen={isProviderModalOpen}
                        onClose={() => setIsProviderModalOpen(false)}
                        title="Game Provider"
                        onProviderSelect={handleProviderSelect}
                    />
                )}
            </Suspense>
        </div>
    )
}
