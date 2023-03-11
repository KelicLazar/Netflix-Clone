import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import "./styles.scss";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";

function App() {
  const router = createBrowserRouter([
    { path: "/welcome", element: <Welcome /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/home", element: <Home /> },
    { path: "/browse", element: <Browse /> },
    { path: "/*", element: <Navigate to={"/welcome"} /> },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
