import React, { useRef } from "react";
import "@/styles/globals.scss";
import "swiper/css";
import Layouts from "@/layouts";
import Providers from "@/components/Providers";
import Footer from "@/layouts/footer";
import Nav from "@/components/nav";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <Providers>
      <Layouts>
        {/* <Nav footerRef={footerRef} /> */}
        <Component {...pageProps} />
        {/* <div ref={footerRef} />{" "} */}
      </Layouts>
    </Providers>
  );
}

export default MyApp;
