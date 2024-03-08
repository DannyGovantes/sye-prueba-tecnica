import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <header>
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/characters"}>Characters</Link>
              </li>
              <li>
                <Link to={"/episodes"}>Episodes</Link>
              </li>
              <li>
                <Link to={"/locations"}>Locations</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
