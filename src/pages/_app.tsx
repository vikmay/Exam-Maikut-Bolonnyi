import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
