import { Suspense, useEffect } from "react"
import Loading from "./pages/loading/Loading"
import { AppRoutes } from "./app/routers/router";

const App = () => {
  useEffect(() => {
    const cwindow: any = window;
    void cwindow?.Telegram?.WebApp.ready();
    void cwindow?.Telegram?.WebApp.expand(true);
    void cwindow?.Telegram?.WebApp.enableClosingConfirmation();
    void cwindow?.Telegram?.WebApp.disableVerticalSwipes();
  })
  return (
    <div className="bg-[#1e1e1e] font-body">
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </div>
  )
}

export default App
