import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import MainLayout from "../components/MainLayout";
import ProfileLayout from "../components/Profile/ProfileLayout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  if (Component.displayName?.startsWith("Login")) {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    );
  } else if (Component.displayName?.startsWith("Profile")) {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <MainLayout>
          <ProfileLayout>
            <Component {...pageProps} />
          </ProfileLayout>
        </MainLayout>
      </IconContext.Provider>
    );
  } else {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </IconContext.Provider>
    );
  }
}
