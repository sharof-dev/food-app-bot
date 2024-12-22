import { useEffect, useState } from "react";
import Loading from "../loading/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-[#1e1e1e] h-screen">
      
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
