import { createSlice } from '@reduxjs/toolkit';

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        showWallet: false,
    },
    reducers: {
        showConnectWallet: (state, action) => {
            state.showWallet = action.payload;
        },
    },
});

export const { showConnectWallet } = walletSlice.actions;

export default walletSlice.reducer;
