import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./components/Resources";
import "./styles/style.scss";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Resources category="html" />} />{" "}
          {/*Med en gang man går inn i side så er det HTML ressurser*/}
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route
            path="/javascript"
            element={<Resources category="javascript" />}
          />
          <Route path="/react" element={<Resources category="react" />} />
          <Route
            path="/headless-cms"
            element={<Resources category="headless-cms" />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
