import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Resources from "./components/Resources";
import "./styles/style.scss";

function Layout() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path=":category" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
