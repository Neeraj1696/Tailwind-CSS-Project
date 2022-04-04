import Nav from "./Components/Nav";

import React, { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
