import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gameProviver } from '../data/gameProvider';
import { GameProvider, GameProviderState } from '../types';


const initialState: GameProviderState = {
    provider: gameProviver,
};

const gameProvidersSlice = createSlice({
    name: 'gameProviders',
    initialState,
    reducers: {
        setProviders(state, action: PayloadAction<GameProvider[]>) {
        state.provider = action.payload;
        },
    },
});

export const { setProviders } = gameProvidersSlice.actions;
export const selectGameProviders = (state: any) => state.gameProvider.provider;
export default gameProvidersSlice.reducer;