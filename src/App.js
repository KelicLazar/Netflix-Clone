import {
  createBrowserRouter,
  Link,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import "./styles.scss";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import ScrollToTop from "./components/ScrollToTop";

const actions = [
  {
    icon: (
      <Link to={"/welcome"} replace={true}>
        <h5>/welcome</h5>
      </Link>
    ),
    name: "/welcome",
  },
  {
    icon: (
      <Link to={"/signin"} replace={true}>
        <h5>/signIn</h5>
      </Link>
    ),
    name: "/signIn",
  },
  {
    icon: (
      <Link to={"/home"} replace={true}>
        <h5>/home</h5>
      </Link>
    ),
    name: "/home",
  },
  {
    icon: (
      <Link to={"/browse"} replace={true}>
        <h5>/browse</h5>
      </Link>
    ),
    name: "/browse",
  },
];
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop>
            <Outlet />
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              // sx={{ position: "fixed", bottom: 40, right: 40 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  // tooltipTitle={action.name}
                ></SpeedDialAction>
              ))}
            </SpeedDial>
          </ScrollToTop>
        </>
      ),
      children: [
        { path: "welcome", element: <Welcome /> },
        { path: "signin", element: <SignIn /> },
        { path: "home", element: <Home /> },
        { path: "browse", element: <Browse /> },
        { path: "/", element: <Navigate to={"welcome"} replace /> },
        { path: "*", element: <Navigate to={"welcome"} replace /> },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
