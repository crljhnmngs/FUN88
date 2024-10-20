import { useSelector } from 'react-redux';
import { selectGameProviders } from '../redux/gameProviderSlice';
import { useState } from 'react';

const useGameProvidersPagination = (itemsPerPage: number) => {
    const gameProviders = useSelector(selectGameProviders);
    const totalPages = Math.ceil(gameProviders.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const currentItems = gameProviders.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return {
        currentItems,
        currentPage,
        totalPages,
        handlePrev,
        handleNext,
    };
};

export default useGameProvidersPagination;