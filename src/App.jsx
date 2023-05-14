import React, { Suspense } from "react";
import "./App.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { MustWatch } from "./components";
import "./styles/cssReset.css";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <MustWatch />
    </Suspense>
  );
}

export default App;
