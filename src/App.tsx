// src/App.tsx
//import React from "react";
import "./styles.css"; // Stelle sicher, dass der Pfad korrekt ist
import Gallery from "./Components/Gallery";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Gallery />
    </>
  );
};

export default App;
