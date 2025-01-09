import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/home/home";
import Pagenation from "./pages/pagination/Pagenation";
import Scroll from "./pages/scroll/Scroll";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        />
        <Route
          path="/pagination"
          element={
            <MainLayout>
              <Pagenation />
            </MainLayout>
          }
        />
        <Route
          path="/scroll-pagination"
          element={
            <MainLayout>
              <Scroll />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
