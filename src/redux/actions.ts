import { createAsyncThunk } from '@reduxjs/toolkit';
import { Games } from '../types';
import { mockFetchGames } from '../data/games';

export const fetchGames = createAsyncThunk<Games[], void>(
    'games/fetchGames',
    async () => {
        return mockFetchGames().then((response) => {
            if (response instanceof Error) {
                throw new Error(response.message);
            }
            return response;
        });
    }
);