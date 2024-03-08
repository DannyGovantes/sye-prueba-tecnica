import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorized, Navbar } from "./components";
import { Character, Episode, Location, Login } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route
            path="characters"
            element={
              <Authorized roles={["admin", "user"]}>
                <Character />
              </Authorized>
            }
          />
          <Route
            path="locations"
            element={
              <Authorized roles={["admin"]}>
                <Location />
              </Authorized>
            }
          />
          <Route
            path="episodes"
            element={
              <Authorized roles={["user"]}>
                <Episode />
              </Authorized>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
