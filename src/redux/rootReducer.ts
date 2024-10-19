import { combineReducers } from 'redux';
import { gamesReducer } from './reducer';
import favoritesReducer from './favoritesSlice';
import footerReducer from './footerSlice';

export const rootReducer = combineReducers({
    games: gamesReducer,
    favorites: favoritesReducer,
    footer: footerReducer
});