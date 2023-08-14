import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Homepage, Capsules, Rockets, SingleRocket } from "./pages"; // Make sure the paths are correct here

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Homepage />
      <Capsules />
      <Rockets />
      <Routes>


      </Routes>
      {/* Add other components/routes as needed */}
    </BrowserRouter>
  );
}

export default App;
