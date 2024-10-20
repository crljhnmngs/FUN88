import { ReactComponent as Sport } from '../assets/icons/sport.svg';
import { ReactComponent as Favorites } from '../assets/icons/star.svg';
import { ReactComponent as Invites } from '../assets/icons/invite.svg';
import { ReactComponent as Casino } from '../assets/icons/casino.svg';
import { ReactComponent as Cashier } from '../assets/icons/cashier.svg';
import { Category } from '../types';

export const footer: Category[] = [
    {
        name: 'SPORTS',
        icon: Sport
    },
    {
        name: 'FAVORITES',
        icon: Favorites
    },
    {
        name: 'INVITE',
        icon: Invites
    },
    {
        name: 'CASINO LIVE',
        icon: Casino
    },
    {
        name: 'CASHIER',
        icon: Cashier
    }
];