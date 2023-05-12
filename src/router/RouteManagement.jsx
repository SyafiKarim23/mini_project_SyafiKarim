import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoadingComponent from "../components/loadingComponent/loadingComponent";
import LayoutComponent from "../components/layouts/LayoutComponent";
import FormComponents from "../pages/form/FormComponents";
import AboutMe from "../pages/aboutMe/about";
import Landingpage from "../pages/LandingPage/landingpage";
import FormCRUD_graphpt from "../pages/CRUD/crudBarang/FormCRUD-graph";
import LoginPage from "../pages/loginPages/LoginPage";
import ReactCaptone from "../pages/feature/tentangKami";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/form" element={<FormComponents />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/aboutme/:id" element={<AboutMe />} />
            <Route path="/belibarang" element={<Landingpage />} />
            <Route path="/crudbarang" element={<FormCRUD_graphpt />} />
            <Route path="/feature" element={<ReactCaptone />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
