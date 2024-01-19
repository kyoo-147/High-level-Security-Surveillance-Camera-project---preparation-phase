import LoadingScreen from "../components/LoadingScreen.jsx";
import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import { DEFAULT_PATH } from "../../config.js";
import { useSelector } from "react-redux";

const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const { user } = useSelector((state) => state.auth);

  return useRoutes([
    // {
    //   path: "/auth",
    //   element: !user ? <AuthLayout /> : <Navigate to={DEFAULT_PATH} replace />,
    //   children: [
    //     { path: "login", element: <LoginPage /> },
    //     { path: "*", element: <Navigate to="/404" replace /> },
    //   ],
    // },
    {
      path: "/",
      element: 
        <DashboardLayout />,

      children: [
        // { path: "/dashboard", element: <Navigate to={DEFAULT_PATH} replace /> },
        // { path: "dashboard", element: <DashboardPage /> },
        { path: "/camera", element: <CameraPage /> },
        // { path: "analytics", element: <Example/>},
        { path: "*", element: <Page404 /> },
      ],
    },
  ]);
}

const LoginPage = Loadable(lazy(() => import("../pages/auth/LoginPage.jsx")));
const DashboardPage = Loadable(
  lazy(() => import("../pages/dashboard/DashboardPage.jsx")),
);
const CameraPage = Loadable(
  lazy(() => import("../pages/dashboard/CameraPage.jsx")),
);
const Example = Loadable(
  lazy(() => import("../pages/Analytics.jsx"))
);
const Page404 = Loadable(lazy(() => import("../pages/Page404.jsx")));
