import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
