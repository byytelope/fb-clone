import Head from "next/head";

interface headProps {
  title?: string;
  description?: string;
  themeColor?: string;
}

export default function CommonHead({
  title,
  description,
  themeColor,
}: headProps) {
  return (
    <Head>
      <title>{title ?? "Facebook"}</title>
      <meta
        name="description"
        content={description ?? "Welcome to Facebook!"}
      />
      <meta name="theme-color" content={themeColor ?? "#FFFFFF"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
