import React from "react";
import { Layout } from "antd";
import Gap from "../../gap/gap";

const FooterComponents = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: "center",
        background: "green",
      }}
    >
      Ant Design ©2023 Created by Ant UED
      <Gap />
      <>© SyafiKarim 2023</>
    </Footer>
  );
};

export default FooterComponents;
