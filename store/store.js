import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from './reducers/user-slice';
import registerSlice from "./reducers/register-slice";

const reducers = combineReducers({
    userInfo: userSlice.reducer,
    registerInfo: registerSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userInfo', 'registerInfo']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const persistor = persistStore(store);

export {store, persistor};
