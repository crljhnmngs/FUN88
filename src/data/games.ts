
import SugarRush from '../assets/images/sugar_rush.webp';
import Crew from '../assets/images/crew.webp';
import BadWolf from '../assets/images/wolf.webp';
import Book from '../assets/images/book_of_egypt.webp';
import Pirates from '../assets/images/pirates_power.webp';
import Crocodile from '../assets/images/crocodile.webp'
import Anaconda from '../assets/images/anaconda.webp';
import Maya from '../assets/images/maya.webp';
import Beach from '../assets/images/beach_life.webp';
import Inca from '../assets/images/inca.webp';
import Persia from '../assets/images/empire_treasures.webp';
import Azteca from '../assets/images/azteca.webp';
import { Games } from '../types';

export const games: Games[] = [
    {
        id: 1,
        name: 'Sugar Rush',
        img: SugarRush,
        category: 'NEW',
        provider: "Pragmatic"
    },
    {
        id: 2,
        name: 'Shaolin Crew',
        img: Crew,
        category: 'NEW',
        provider: 'EXPANSE'
    },
    {
        id: 3,
        name: 'Big Bad Wolf',
        img: BadWolf,
        category: 'SLOTS',
        provider: 'Playtech'
    },
    {
        id: 4,
        name: 'Book Of Egypt',
        img: Book,
        category: 'NEW',
        provider: 'EXPANSE'
    },
    {
        id: 5,
        name: 'Pirates Power',
        img: Pirates,
        category: 'SLOTS',
        provider: 'EXPANSE'
    },
    {
        id: 6,
        name: 'Crocodile Butz Xtreme FB',
        img: Crocodile,
        category: 'LIVE',
        provider: 'Playtech'
    },
    {
        id: 7,
        name: 'Anaconda Wild 2 PowerPlay Jackpot',
        img: Anaconda,
        category: 'NEW',
        provider: 'Playtech'
    },
    {
        id: 8,
        name: 'Maya Jackpot',
        img: Maya,
        category: 'JACKPOTS',
        provider: 'Evolution'
    },
    {
        id: 9,
        name: 'Beach Life',
        img: Beach,
        category: 'NEW',
        provider: 'Playtech'
    },
    {
        id: 10,
        name: 'Inca Jackpot',
        img: Inca,
        category: 'TABLE',
        provider: 'Evolution'
    },
    {
        id: 11,
        name: 'Pride Of Persia Empire Treasures',
        img: Persia,
        category: 'NEW',
        provider: 'Playtech'
    },
        {
        id: 12,
        name: 'Azteca Bonus Lines: Powerplay Jackpot',
        img: Azteca,
        category: 'BINGO',
        provider: 'Playtech'
    }
];

export const mockFetchGames = () => {
    return new Promise<Games[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(games);
            //Simulate an error.
            // reject(new Error('Failed to fetch game'));
        }, 3000); // 3 second delay
    });
};