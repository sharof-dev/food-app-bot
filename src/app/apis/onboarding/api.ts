import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const onBoarding = createApi({
    reducerPath: "onBoardingApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getOnboardingStatus: builder.query<{ isOnboarded: boolean }, void>({
            query: () => ({
                url: "/onboarding-status",
            }),
        }),
    }),
});

export const { useGetOnboardingStatusQuery } = onBoarding;
