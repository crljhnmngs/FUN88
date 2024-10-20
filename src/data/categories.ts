import { ReactComponent as Fire } from '../assets/icons/fire.svg';
import { ReactComponent as New } from '../assets/icons/new.svg';
import { ReactComponent as Slots } from '../assets/icons/slots.svg';
import { ReactComponent as Live } from '../assets/icons/live.svg';
import { ReactComponent as Jackpots } from '../assets/icons/jackpots.svg';
import { ReactComponent as Table } from '../assets/icons/table.svg';
import { ReactComponent as Bingo } from '../assets/icons/bingo.svg';
import { ReactComponent as Others } from '../assets/icons/others.svg';
import { Category } from '../types';

export const categories: Category[] = [
    {
        name: 'START',
        icon: Fire
    },
    {
        name: 'NEW',
        icon: New
    },
    {
        name: 'SLOTS',
        icon: Slots
    },
    {
        name: 'LIVE',
        icon: Live
    },
    {
        name: 'JACKPOTS',
        icon: Jackpots
    },
    {
        name: 'TABLE',
        icon: Table
    },
    {
        name: 'BINGO',
        icon: Bingo
    },
    {
        name: 'OTHERS',
        icon: Others
    },
];