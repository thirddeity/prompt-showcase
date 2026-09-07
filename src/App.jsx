import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import ScrollToTop from "./components/ScrollToTop";
// Add page imports here
import Home from "@/pages/Home";

const AuthenticatedApp = () => {
  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<></>} />
    </Routes>
  );
};

function App() {
  return (
    <Router basename="/prompt-showcase">
      <ScrollToTop />
      <AuthenticatedApp />
    </Router>
  );
}

export default App;
