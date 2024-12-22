import { RouterProvider } from "react-router-dom"
import { routes } from "./app/routers/router"
import { Suspense } from "react"
import Loading from "./pages/loading/Loading"

const App = () => {
  return (
    <div className="bg-[#1e1e1e]">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </div>
  )
}

export default App
