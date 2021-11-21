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
      <meta name="theme-color" content={themeColor ?? "#F0F2F5"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
