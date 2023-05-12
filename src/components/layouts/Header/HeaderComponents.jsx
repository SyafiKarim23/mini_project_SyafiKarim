import React, { useState } from "react";
import { Menu, Layout, Row } from "antd";
import { MENU_ITEM } from "../constants";
import { Link } from "react-router-dom";
import "./HeaderComponents.css";

const HeaderComponents = () => {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        background: "green",
      }}
    >
      <Row justify="space-between">
        <Link to="/feature">
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "green",
            }}
            onClick={() => setCurrent("")}
          />
          <marquee className="Head" scrollamount="4" direction="down">
            Toko Pertanian MH Jaya
          </marquee>
        </Link>

        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={MENU_ITEM}
          disabledOverflow
          onClick={onClick}
          selectedKeys={[current]}
        />
      </Row>
    </Header>
  );
};

export default HeaderComponents;
