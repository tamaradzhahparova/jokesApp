import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Components/Header";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Header />
      </div>
    </NextUIProvider>
  );
}

export default App;
