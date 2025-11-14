import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { Preloader } from "@/components/Preloader";
import { UserProvider } from "@/context/UserContext"; 
//where we put the preloader and user context provider
export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <UserProvider>
      <Preloader isLoading={isLoading} />
      <Component {...pageProps} />
    </UserProvider>
  );
}
