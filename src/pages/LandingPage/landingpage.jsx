import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Gform from "../Gform/Gform";
import Gap from "../../components/gap/gap";

const Landingpage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    localStorage.setItem("token", true);
    navigate("/aboutme");
  };
  return (
    <>
      <div>
        <h3>Form Pembelian Barang</h3>
        <Gap />
      </div>
      <Gap />
      <div>
        <Gform />
      </div>
    </>
  );
};

export default Landingpage;
