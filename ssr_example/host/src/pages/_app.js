export function reportWebVitals(metric) {
  console.log(metric);
}

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
