import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLogin from "./pages/MainLogin";
import AlternativeLogin from "./pages/AlternativeLogin";
import Welcome from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLogin />,
  },
  {
    path: "/alternative-login",
    element: <AlternativeLogin />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
