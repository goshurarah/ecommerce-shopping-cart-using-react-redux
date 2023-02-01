import StoreContainer, { ConnectCartPage } from "./Container/StoreContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StoreContainer />} />
          <Route path="/cart" element={<ConnectCartPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
