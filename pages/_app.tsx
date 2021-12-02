import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import MainLayout from "../components/MainLayout";
import ProfileLayout from "../components/Profile/ProfileLayout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const fetcher = async (url: string) =>
    await fetch(url).then(async (res) => await res.json());

  if (Component.displayName?.startsWith("Login")) {
    return (
      <SWRConfig value={{ fetcher }}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </SWRConfig>
    );
  } else if (Component.displayName?.startsWith("Profile")) {
    return (
      <SWRConfig value={{ fetcher }}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <MainLayout>
            <ProfileLayout>
              <Component {...pageProps} />
            </ProfileLayout>
          </MainLayout>
        </IconContext.Provider>
      </SWRConfig>
    );
  } else {
    return (
      <SWRConfig value={{ fetcher }}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </IconContext.Provider>
      </SWRConfig>
    );
  }
}
