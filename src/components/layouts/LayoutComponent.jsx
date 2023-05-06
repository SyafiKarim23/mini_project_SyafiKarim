import React from "react";
import { Layout } from "antd";
import HeaderComponents from "./Header/HeaderComponents";
import FooterComponents from "./Footer/FooterComponents";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <HeaderComponents />
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: "#fff",
            }}
          >
            {children}
          </div>
        </Content>
        <FooterComponents />
      </Layout>
    </>
  );
};

export default LayoutComponent;
