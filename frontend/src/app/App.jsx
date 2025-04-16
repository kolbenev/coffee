import { useState } from "react";
import { AppInit } from "@/features/AppInit";
import { AppRouter } from "./router";

import "./styles/main.css";

function App() {
  const [loadedWeb, setLoadedWeb] = useState(true);
  return (
    <div className="app">
      {loadedWeb && <AppInit setLoadedWeb={setLoadedWeb} />}
      <AppRouter />
    </div>
  );
}

export default App;
