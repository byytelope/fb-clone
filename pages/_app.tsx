import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}
