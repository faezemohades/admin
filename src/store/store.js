import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import authSlice from './authSlice';
import billSlice from './billSlice';
import chartBarSlice from './chartBarSlice';
import chartLineSlice from './chartLineSlice';
import contentCodeSlice from './contentCodeSlice';
import contentSlice from './contentSlice';
import hostSlice from './hostSlice';
import trafficSlice from './trafficSlice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['host', 'content', 'traffic', 'bill', 'chartBar', 'chartLine']


};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    auth: authSlice,
    content: contentSlice,
    host: hostSlice,
    traffic: trafficSlice,
    bill: billSlice,
    chartBar: chartBarSlice,
    chartLine: chartLineSlice,
    contentCode: contentCodeSlice

})
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],

})

const persistor = persistStore(store);
export { store, persistor };
