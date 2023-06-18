import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './App.scss';
import Home from './components/home';
import NavBar from "./components/nav-bar";
import Articles from "./components/articles";
import PageNotFound from "./components/page-not-found";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MW>
          <Home />
        </MW>
      )
    },
    {
      path: "/articles/:name",
      element: (
        <MW>
          <Articles />
        </MW>
      )
    },
    {
      path: "/*",
      element: (
        <PageNotFound />
      )
    }
  ])
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

const MW = ({ children }) => {
  return (
    <>
      <div className="navigation-bar">
        <NavBar />
      </div>
      <div className="body">
        {children}
      </div>
    </>
  );
}