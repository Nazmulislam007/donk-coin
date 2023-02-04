import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../feature/token/tokenSlice';
import walletReducer from '../feature/wallet/walletSlice';

export default configureStore({
    reducer: {
        wallet: walletReducer,
        token: tokenReducer,
    },
});
