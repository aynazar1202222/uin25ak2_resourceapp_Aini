import { Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Resources from "./components/Resources";

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
