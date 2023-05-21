import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
