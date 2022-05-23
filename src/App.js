import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import SigninAndSignup from "./components/SigninandSignup/SigninAndSignUp";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("light");
  const [btnText, setText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Enable Light Mode");
    } else {
      setMode("light");
      setText("Enable Dark Mode");
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SigninAndSignup />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/in"
          element={
            <>
              <News
                key="general"
                pageSize={6}
                country="in"
                category="general"
                mode={mode}
              />
              <Navbar
                country="in"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/in/business"
          element={
            <>
              <News
                key="business"
                pageSize={6}
                country="in"
                category="business"
                mode={mode}
              />
              <Navbar
                country="in"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/in/entertainment"
          element={
            <>
              <News
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
                mode={mode}
              />
              <Navbar
                country="in"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/in/health"
          element={
            <>
              <News
                key="health"
                pageSize={6}
                country="in"
                category="health"
                mode={mode}
              />
              <Navbar
                country="in"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/in/science"
          element={
            <>
              <News
                key="science"
                pageSize={6}
                country="in"
                category="science"
                mode={mode}
              />
              <Navbar
                country="in"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/in/sports"
          element={
            <>
              <News
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
                mode={mode}
              />
              <Navbar
                country="in"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/in/technology"
          element={
            <>
              <News
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
                mode={mode}
              />
              <Navbar
                country="in"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/us"
          element={
            <>
              <News
                key="general"
                pageSize={6}
                country="us"
                category="general"
                mode={mode}
              />
              <Navbar
                country="us"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/us/business"
          element={
            <>
              <News
                key="business"
                pageSize={6}
                country="us"
                category="business"
                mode={mode}
              />
              <Navbar
                country="us"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/us/entertainment"
          element={
            <>
              <News
                key="entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
                mode={mode}
              />
              <Navbar
                country="us"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/us/health"
          element={
            <>
              <News
                key="health"
                pageSize={6}
                country="us"
                category="health"
                mode={mode}
              />
              <Navbar
                country="us"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/us/science"
          element={
            <>
              <News
                key="science"
                pageSize={6}
                country="us"
                category="science"
                mode={mode}
              />
              <Navbar
                country="us"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/us/sports"
          element={
            <>
              <News
                key="sports"
                pageSize={6}
                country="us"
                category="sports"
                mode={mode}
              />
              <Navbar
                country="us"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/us/technology"
          element={
            <>
              <News
                key="technology"
                pageSize={6}
                country="us"
                category="technology"
                mode={mode}
              />
              <Navbar
                country="us"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/gb"
          element={
            <>
              <News
                key="general"
                pageSize={6}
                country="gb"
                category="general"
                mode={mode}
              />
              <Navbar
                country="gb"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/gb/business"
          element={
            <>
              <News
                key="business"
                pageSize={6}
                country="gb"
                category="business"
                mode={mode}
              />
              <Navbar
                country="gb"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/gb/entertainment"
          element={
            <>
              <News
                key="entertainment"
                pageSize={6}
                country="gb"
                category="entertainment"
                mode={mode}
              />
              <Navbar
                country="gb"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/gb/health"
          element={
            <>
              <News
                key="health"
                pageSize={6}
                country="gb"
                category="health"
                mode={mode}
              />
              <Navbar
                country="gb"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/gb/science"
          element={
            <>
              <News
                key="science"
                pageSize={6}
                country="gb"
                category="science"
                mode={mode}
              />
              <Navbar
                country="gb"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/gb/sports"
          element={
            <>
              <News
                key="sports"
                pageSize={6}
                country="gb"
                category="sports"
                mode={mode}
              />
              <Navbar
                country="gb"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
        <Route
          path="/gb/technology"
          element={
            <>
              <News
                key="technology"
                pageSize={6}
                country="gb"
                category="technology"
                mode={mode}
              />
              <Navbar
                country="gb"
                mode={mode}
                toggleMode={toggleMode}
                btnText={btnText}
              />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
