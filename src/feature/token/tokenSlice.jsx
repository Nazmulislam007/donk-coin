import { createSlice } from '@reduxjs/toolkit';
import tokens from '../api/tokens';

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        tokens,
        swip: {
            toggle: false,
            selected: '',
        },
        to: {
            toggle: false,
            selected: '',
        },
        filter: 'Avalanche',
    },
    reducers: {
        selectSwipToken: (state, action) => {
            state.swip.selected = action.payload;
        },
        selectToToken: (state, action) => {
            state.to.selected = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSwipToggle: (state) => {
            state.swip.toggle = true;
        },
        setToToggle: (state) => {
            state.to.toggle = true;
        },
        setHideAll: (state) => {
            state.to.toggle = false;
            state.swip.toggle = false;
        },
    },
});

export const { selectSwipToken, selectToToken, setFilter, setSwipToggle, setToToggle, setHideAll } =
    tokenSlice.actions;

export default tokenSlice.reducer;
