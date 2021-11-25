import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return Component.displayName === "Login" ? (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  ) : (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}
