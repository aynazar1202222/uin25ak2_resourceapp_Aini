import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/html">HTML</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li>
          <Link tp="/react">React</Link>
        </li>
        <li>
          <Liml to="/sanity">Sanity and headless CMS</Liml>
        </li>
      </ul>
    </nav>
  );
}
