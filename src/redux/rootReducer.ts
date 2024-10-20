import { combineReducers } from 'redux';
import { gamesReducer } from './reducer';
import favoritesReducer from './favoritesSlice';
import footerReducer from './footerSlice';
import gameProviderReducer from './gameProviderSlice';

export const rootReducer = combineReducers({
    games: gamesReducer,
    favorites: favoritesReducer,
    footer: footerReducer,
    gameProvider: gameProviderReducer
});