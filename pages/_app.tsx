import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/shared/layout/Navbar';
import {NextPage} from "next";
import config from "tailwindcss/defaultConfig";
import {ReactElement, ReactNode} from "react";
import Head from "next/head";

config.autoAddCss = false;

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>
      <Head>
        <title>Beta Gamma Epsilon</title>
        <meta name="description" content="Northeastern University's Engineering and First Social Fraternity." />
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="/icon.webp"
        />
        <meta
          property="og:image"
          content="/icon.webp"
        />
      </Head>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <main>{getLayout(<Component {...pageProps} />)}</main>
    </div>
  );
}
