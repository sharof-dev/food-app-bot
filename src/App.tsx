import { Suspense, useEffect } from "react"
import Loading from "./pages/loading/Loading"
import { AppRoutes } from "./app/routers/router";
import { makeServer } from "./server/server";
import { useGetOnboardingStatusQuery } from "./app/apis/onboarding/api";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";
if (import.meta.env.NODE_ENV === "development") {
  makeServer()
}

const App = () => {
  // const {data} = useGetOnboardingStatusQuery();
  // console.log(data);
  useEffect(() => {
    const cwindow: any = window;
    void cwindow?.Telegram?.WebApp.ready();
    void cwindow?.Telegram?.WebApp.expand(true);
    // if(void cwindow?.Telegram?.WebApp.requestFullscreen()) return void cwindow?.Telegram?.WebApp.requestFullscreen();
    void cwindow?.Telegram?.WebApp.enableClosingConfirmation();
    void cwindow?.Telegram?.WebApp.disableVerticalSwipes();
  }, [])
  return (
    <div className="bg-[#1e1e1e] font-body">
      <Provider store={store}>
        <PersistGate loading="null" persistor={persistor}>
          <Suspense fallback={<Loading />}>
            <AppRoutes />
          </Suspense>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
