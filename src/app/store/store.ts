import { configureStore } from "@reduxjs/toolkit";
import { onBoarding } from "../apis/onboarding/api";
import {
    persistReducer,
    PersistConfig,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [onBoarding.reducerPath]: onBoarding.reducer,
});

const persistConfig: PersistConfig<any> = {
    key: "root",
    storage,
    blacklist: [onBoarding.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(onBoarding.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
