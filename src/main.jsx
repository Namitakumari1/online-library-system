import React from "react";
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import AddBook from "./components/AddBook.jsx";
import BookDetails from "./components/BookDetails.jsx";
import NotFound from "./components/NotFound.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/style.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/browseBooks",
        element: <BrowseBooks />
      },
      {
        path: "/addBook",
        element: <AddBook />
      },
      {
        path: "book/:id",
        element: <BookDetails />
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </React.StrictMode>
)

