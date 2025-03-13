import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/:categorySlug" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
