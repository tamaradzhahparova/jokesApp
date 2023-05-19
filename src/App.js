import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
