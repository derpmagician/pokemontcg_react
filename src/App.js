
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import NotFound from "./pages/NotFound";

import Title from "./components/Title";
// import OptionsBar from "./components/OptionsBar"
import './App.css';



function App() {
  
  return (

    <div className="App">
      <Title />
      {/* <OptionsBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
