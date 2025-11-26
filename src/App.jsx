import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLogin from "./pages/MainLogin.jsx";
import AlternativeLogin from "./pages/AlternativeLogin.jsx";
import Welcome from "./pages/Welcome.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Root from "./pages/Root.jsx";
import { LoginContext } from "./store/login-context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
    ],
  },
]);

function App() {
  return (
    <LoginContext>
      <RouterProvider router={router} />
    </LoginContext>
  );
}

export default App;
