import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import authReducer from '../reducers/authReducer';
import loginTokenReducer from '../reducers/loginTokenReducer';
import guestReducer from '../reducers/guestReducer';
import thunk from 'redux-thunk';
import accommodationReducer from '../reducers/accommodationReducer';
import bookingsReducer from '../reducers/bookingsReducer';
import adminReducer from '../reducers/adminReducer';
import paypalReducer from '../reducers/paypalReducer';

const persistConfig = {
	key: 'root',
	storage,
	transforms: [
		encryptTransform({
			secretKey: 'c4pSt0n3Pr0j3Ct',
		}),
	],
};

const rootReducer = combineReducers({
	authReducer: authReducer,
	loginToken: loginTokenReducer,
	guestReducer: guestReducer,
	adminReducer: adminReducer,
	accommodationReducer: accommodationReducer,
	bookingsReducer: bookingsReducer,
	paypalReducer: paypalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export const persistor = persistStore(store);
