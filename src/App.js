import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import SigninAndSignup from "./components/SigninandSignup/SigninAndSignUp";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News key="general" pageSize={6} country="in" category="general" />
          }
        ></Route>
        <Route
          path="/in"
          element={
            <News key="general" pageSize={6} country="in" category="general" />
          }
        ></Route>
        <Route
          path="/in/business"
          element={
            <News
              key="business"
              pageSize={6}
              country="in"
              category="business"
            />
          }
        ></Route>
        <Route
          path="/in/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={6}
              country="in"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          path="/in/health"
          element={
            <News key="health" pageSize={6} country="in" category="health" />
          }
        ></Route>
        <Route
          path="/in/science"
          element={
            <News key="science" pageSize={6} country="in" category="science" />
          }
        ></Route>
        <Route
          path="/in/sports"
          element={
            <News key="sports" pageSize={6} country="in" category="sports" />
          }
        ></Route>
        <Route
          path="/in/technology"
          element={
            <News
              key="technology"
              pageSize={6}
              country="in"
              category="technology"
            />
          }
        ></Route>
        <Route
          path="/us"
          element={
            <News key="general" pageSize={6} country="us" category="general" />
          }
        ></Route>
        <Route
          path="/us/business"
          element={
            <News
              key="business"
              pageSize={6}
              country="us"
              category="business"
            />
          }
        ></Route>
        <Route
          path="/us/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={6}
              country="us"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          path="/us/health"
          element={
            <News key="health" pageSize={6} country="us" category="health" />
          }
        ></Route>
        <Route
          path="/us/science"
          element={
            <News key="science" pageSize={6} country="us" category="science" />
          }
        ></Route>
        <Route
          path="/us/sports"
          element={
            <News key="sports" pageSize={6} country="us" category="sports" />
          }
        ></Route>
        <Route
          path="/us/technology"
          element={
            <News
              key="technology"
              pageSize={6}
              country="us"
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
