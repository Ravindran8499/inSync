import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import SigninAndSignup from "./components/SigninandSignup/SigninAndSignUp";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
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
              />
              <Navbar country="in" />
            </>
          }
        ></Route>
        <Route
          path="/in/business"
          element={
            <>
              {" "}
              <News
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
              <Navbar country="in" />
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
              />
              <Navbar country="in" />
            </>
          }
        ></Route>
        <Route
          path="/in/health"
          element={
            <>
              <News key="health" pageSize={6} country="in" category="health" />
              <Navbar country="in" />
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
              />
              <Navbar country="in" />
            </>
          }
        ></Route>
        <Route
          path="/in/sports"
          element={
            <>
              <News key="sports" pageSize={6} country="in" category="sports" />
              <Navbar country="in" />
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
              />
              <Navbar country="in" />
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
              />
              <Navbar country="us" />
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
              />
              <Navbar country="us" />
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
              />
              <Navbar country="us" />
            </>
          }
        ></Route>
        <Route
          path="/us/health"
          element={
            <>
              <News key="health" pageSize={6} country="us" category="health" />
              <Navbar country="us" />
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
              />
              <Navbar country="us" />
            </>
          }
        ></Route>
        <Route
          path="/us/sports"
          element={
            <>
              <News key="sports" pageSize={6} country="us" category="sports" />
              <Navbar country="us" />
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
              />
              <Navbar country="us" />
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
              />
              <Navbar country="gb" />
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
              />
              <Navbar country="gb" />
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
              />
              <Navbar country="gb" />
            </>
          }
        ></Route>
        <Route
          path="/gb/health"
          element={
            <>
              <News key="health" pageSize={6} country="gb" category="health" />
              <Navbar country="gb" />
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
              />
              <Navbar country="gb" />
            </>
          }
        ></Route>
        <Route
          path="/gb/sports"
          element={
            <>
              <News key="sports" pageSize={6} country="gb" category="sports" />
              <Navbar country="gb" />
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
              />
              <Navbar country="gb" />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
