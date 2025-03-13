import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div id="content">{children}</div>
    </div>
  );
}
