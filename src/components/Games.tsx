import React from 'react';
import { GamesProps } from '../types';
import { FaStar, FaRegStar } from "react-icons/fa6";

export const Games = ({ loading, items, error, favorites, handleFavorite, currentCategory, filterBy }: GamesProps) => {
    return (
        <div className='flex mt-5 gap-2 mx-1 flex-wrap h-auto max-h-[29.5rem] overflow-hidden'>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className="text-red-500">Error: {error}</div>
            ) : (
                <React.Fragment>
                    {filterBy === "FAVORITES" ? (
                         //Display Games by Favorites
                        <React.Fragment>
                            {items
                                .filter((game) => favorites.includes(game.id))
                                .map((game, i) => (
                                    <div key={i} className="relative w-[116px] h-[120px] rounded-lg">
                                        <img
                                            src={game.img}
                                            alt={game.name}
                                            className="w-[116px] h-[120px] rounded-lg object-cover"
                                        />
                                        <button
                                            onClick={() => handleFavorite(game.id)}
                                            className="absolute top-0 right-0 bg-black bg-opacity-50 p-4 rounded-tr-lg"
                                            style={{
                                                clipPath: "polygon(100% 0, 100% 100%, 0 0%, 0 0%)",
                                            }}
                                        >
                                            <FaStar className="relative text-yellow-300 -top-[9px] left-[9px]" />
                                        </button>
                                    </div>
                                ))}
                        </React.Fragment>
                    ) : currentCategory === "START" ? (
                        //Display All Games
                        <React.Fragment>
                            {items.map((games, i) => (
                                <div key={i} className="relative w-[116px] h-[120px] rounded-lg">
                                    <img
                                        src={games.img}
                                        alt={games.name}
                                        className="w-[116px] h-[120px] rounded-lg object-cover"
                                    />
                                    <button
                                        onClick={() => handleFavorite(games.id)}
                                        className="absolute top-0 right-0 bg-black bg-opacity-50 p-4 rounded-tr-lg"
                                        style={{
                                            clipPath: "polygon(100% 0, 100% 100%, 0 0%, 0 0%)",
                                        }}
                                    >
                                        {favorites.includes(games.id) ? (
                                            <FaStar className="relative text-yellow-300 -top-[9px] left-[9px]" />
                                        ) : (
                                            <FaRegStar className="relative text-white -top-[9px] left-[9px]" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </React.Fragment>
                    ) : (
                        //Display Games by Category Selected
                        <React.Fragment>
                            {items
                                .filter((game) => game.category === currentCategory)
                                .map((game, i) => (
                                    <div key={i} className="relative w-[116px] h-[120px] rounded-lg">
                                        <img
                                            src={game.img}
                                            alt={game.name}
                                            className="w-[116px] h-[120px] rounded-lg object-cover"
                                        />
                                        <button
                                            onClick={() => handleFavorite(game.id)}
                                            className="absolute top-0 right-0 bg-black bg-opacity-50 p-4 rounded-tr-lg"
                                            style={{
                                                clipPath: "polygon(100% 0, 100% 100%, 0 0%, 0 0%)",
                                            }}
                                        >
                                            {favorites.includes(game.id) ? (
                                                <FaStar className="relative text-yellow-300 -top-[9px] left-[9px]" />
                                            ) : (
                                                <FaRegStar className="relative text-white -top-[9px] left-[9px]" />
                                            )}
                                        </button>
                                    </div>
                                ))}
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};
