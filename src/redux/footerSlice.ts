
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FooterState } from '../types';

const initialState: FooterState = {
    activeFooter: 'CASINO LIVE',
};

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        setActiveFooter: (state, action: PayloadAction<string>) => {
            state.activeFooter = action.payload;
        },
    },
});

export const { setActiveFooter } = footerSlice.actions;

export default footerSlice.reducer;
