import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from './reducers/user-slice';
import registerSlice from "./reducers/register-slice";
import pictureSlice from "./reducers/picture-slice";

const reducers = combineReducers({
    userInfo: userSlice.reducer,
    registerInfo: registerSlice.reducer,
    pictureInfo: pictureSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userInfo', 'registerInfo', 'pictureInfo']
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
