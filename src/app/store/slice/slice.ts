import { combineReducers } from "@reduxjs/toolkit";
import { onBoarding } from "../../apis/onboarding/api";

export const rootReducer = combineReducers({
    [onBoarding.reducerPath || 'onBoardingApi']: onBoarding.reducer
})
console.log(onBoarding.reducerPath);
