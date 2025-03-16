import Nav from "./Nav";

// Layout-komponenten tar i mot children som et props og children er innholdet som sender til Layout
export default function Layout({ children }) {
  return (
    <div className="container">
      <Nav />
      <div id="content">{children}</div>
    </div>
  );
}
