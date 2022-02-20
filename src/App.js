import { Outlet, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div>
      <div className="App">
        <Sidebar />
      </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to={{ pathname: "/LoginPage" }}>LoginPage</Link> |{" "}
        <Link to={{ pathname: "/CreateAccountPage" }}>CreateAccountPage</Link>
      </nav>
      <Outlet />
    </div>
  );
}
