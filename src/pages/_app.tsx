import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS</title>
        <meta
          name="description"
          content="E-commerce para articulos coleccionables"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
