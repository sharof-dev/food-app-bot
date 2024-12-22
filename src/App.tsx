import { RouterProvider } from "react-router-dom"
import { routes } from "./app/routers/router"
import { Suspense, useEffect } from "react"
import Loading from "./pages/loading/Loading"

const App = () => {
  useEffect(() => {
    const cwindow: any = window;
    void cwindow?.Telegram?.WebApp.ready();
    void cwindow?.Telegram?.WebApp.expand(true);
    void cwindow?.Telegram?.WebApp.enableClosingConfirmation();
    void cwindow?.Telegram?.WebApp.setHeaderColor("#1A202E");
    void cwindow?.Telegram?.WebApp.setBackgroundColor("#1A202E");
    void cwindow?.Telegram?.WebApp.disableVerticalSwipes();
  })
  return (
    <div className="bg-[#1e1e1e]">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </div>
  )
}

export default App
