import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // Before it's use div, but it is unecessary so can either use div or fragment(import it from react library) to wrap other sub elements (Header, Main, Footer)
    //<Fragment>
    // Can also use empty tag to wrap that is recognize by react
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <Footer />
      {/* </Fragment> */}
    </>
  );
}

export default App;
