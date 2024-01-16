import Header from "../components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps } :any) {
  return (
    <>
      <Header />
      <main className="overflow-vertical grow-1">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
