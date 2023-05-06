import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoadingComponent from "../components/loadingComponent/loadingComponent";
import LayoutComponent from "../components/layouts/LayoutComponent";
import FormComponents from "../pages/form/FormComponents";
import HomePage from "../pages/homePage/HomePage";
import AboutMe from "../pages/aboutMe/about";
import Portfolio from "../pages/Portfolio/Portfolio";
import FormComponentExp from "../pages/formExample/FormComponentExp";
import CreateProduct from "../pages/createProduct/createProduct";
import FormCRUD from "../pages/CRUD/FormCRUD";
import Landingpage from "../pages/LandingPage/landingpage";
import LoginPage from "../pages/loginPages/LoginPage";
import Beranda from "../pages/beranda/beranda";

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
          <Routes path="/" element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/form" element={<FormComponents />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/aboutme/:id" element={<AboutMe />} />
            <Route path="/FormCRUD" element={<FormCRUD />} />
            <Route path="/landingpage" element={<Landingpage />} />
            <Route path="/beranda" element={<Beranda />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
