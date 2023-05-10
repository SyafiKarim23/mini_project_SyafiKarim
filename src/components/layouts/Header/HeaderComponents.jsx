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
          <>Toko Pertanian MH JAYA</>
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
      {/* <div className="Head">
        <Input
          placeholder="Search"
          //   value={query}
          //   onChange={handleChange}
          style={{ marginRight: "10px", width: 180, height: 31 }}
        />
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </div> */}
    </Header>
  );
};

export default HeaderComponents;
