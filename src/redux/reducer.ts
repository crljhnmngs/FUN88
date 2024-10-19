import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from './actions';
import { GamesState } from '../types';


const initialState: GamesState = {
    items: [],
    loading: false,
    error: null,
};

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGames.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchGames.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            state.error = null;
        })
        .addCase(fetchGames.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export const { actions: gamesActions, reducer: gamesReducer } = gamesSlice;