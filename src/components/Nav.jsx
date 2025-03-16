import { Link } from "react-router-dom";

//Denne nav components innholder en liste med lenker der lenkene peker til en side som titlen
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
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/headless-cms">Headless-CMS</Link>
        </li>
      </ul>
    </nav>
  );
}
