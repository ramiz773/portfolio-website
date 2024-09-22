import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
