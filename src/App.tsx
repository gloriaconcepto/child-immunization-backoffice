import React from "react";
import MainApp from "./modules/Routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./shared/authContext";

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
      <MainApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
