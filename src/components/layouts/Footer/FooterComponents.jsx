import React from "react";
import { Layout } from "antd";
import Gap from "../../gap/Gap";
import "./FooterComponents.css";

const FooterComponents = () => {
  const { Footer } = Layout;
  return (
    <Footer
      className="footer"
      style={{
        textAlign: "center",
        background: "green",
      }}
    >
      <Gap />
      <>© Toko Pertanian MH Jaya By: SyafiKarim 2023</>
    </Footer>
  );
};

export default FooterComponents;
