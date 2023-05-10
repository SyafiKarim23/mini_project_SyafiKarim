import React from "react";
import { PRODUCT_DATA } from "./constant";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row, Card } from "antd";
import "./tentangKami.css";
import Gap from "../../components/gap/gap";

const ReactCaptone = () => {
  return (
    <>
      <h4>Toko Pertanian MH Jaya</h4>

      {PRODUCT_DATA.map((product, index) => (
        <Row key={index} className="row2">
          <Card
            className="card2"
            hoverable
            style={{
              marginRight: "15px",
              color: "#19345E",
            }}
          >
            <Col className="gutter-row">
              <img src={product.image1} alt="" className="foto2" />
              <Gap height={10} />
              <div className="judul">{product.judul1}</div>
              <Gap height={10} />
              <div className="konten2">{product.teks1}</div>
            </Col>
          </Card>

          <Gap />
          <Card
            className="card2"
            hoverable
            style={{
              marginRight: "15px",
              color: "#19345E",
            }}
          >
            <Col className="gutter-row">
              <img src={product.image2} alt="" className="foto2" />
              <Gap height={10} />
              <div className="judul">{product.judul2}</div>
              <Gap height={10} />
              <div className="konten2">{product.teks2}</div>
              <a
                href="https://alterrabills.id/"
                className="read-more"
                target="_blank"
              >
                <b>Maps</b>
                <ArrowRightOutlined />
              </a>
            </Col>
          </Card>

          <Gap height={10} />

          <Card
            className="card2"
            hoverable
            style={{
              marginRight: "15px",
              color: "#19345E",
            }}
          >
            <Col className="gutter-row">
              <img src={product.image3} alt="" className="foto2" />
              <Gap height={10} />
              <div className="judul">{product.judul3}</div>
              <Gap height={10} />
              <div className="konten2">{product.teks3}</div>
              <a
                href="https://wa.me/6281559540196"
                className="read-more"
                target="_blank"
              >
                <b>Whats App</b>
                <ArrowRightOutlined />
              </a>
            </Col>
          </Card>
        </Row>
      ))}
    </>
  );
};

export default ReactCaptone;
