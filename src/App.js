import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import "./styles.scss";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/welcome",
      element: <Welcome />,
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/*", element: <Navigate to={"/welcome"} /> },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>

      {/* <div className="test">
        <img
          // src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/13c128a8-69b5-4d6b-85a7-a8e0f80874ac/RS-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        ></img>
      </div> */}

      {/* <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "blue",
          top: "0",
        }}
      >
        {" "}
      </div> */}
    </div>
  );
}

export default App;
