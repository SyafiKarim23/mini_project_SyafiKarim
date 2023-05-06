import React from "react";
import { JOIN_DATA } from "./constant";
import { PRODUCT_DATA } from "./constant";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row, Card } from "antd";
import "./reactCaptone.css";
import Gap from "../../component/gap/Gap";

const ReactCaptone = () => {
  return (
    <>
      <h4>Why Join Us?</h4>

      {JOIN_DATA.map((join, index) => (
        <Row key={index} className="row">
          <Card className="card">
            <Col className="gutter-row">
              <img src={join.image} alt="" className="foto" />
              <Gap height={10} />
              <div className="konten">{join.teks}</div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src={join.image} alt="" className="foto" />
              <Gap height={10} />
              <div className="konten">{join.teks}</div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src={join.image} alt="" className="foto" />
              <Gap height={10} />
              <div className="konten">{join.teks}</div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src={join.image} alt="" className="foto" />
              <Gap height={10} />
              <div className="konten">{join.teks}</div>
            </Col>
          </Card>
        </Row>
      ))}

      <h4>Our Products and Services</h4>

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
                    <b>Learn More</b><ArrowRightOutlined /></a>
            </Col>
          </Card>

          <Gap width={20} />

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
                    <b>Learn More</b><ArrowRightOutlined />
                  </a>
            </Col>
          </Card>

          <Gap width={20} />

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
                    <b>Learn More</b><ArrowRightOutlined />
                  </a>
            </Col>
          </Card>

          <Gap width={20} />

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
                    <b>Learn More</b><ArrowRightOutlined />
                  </a>
            </Col>
          </Card>
        </Row>
      ))}
    </>
  );
};

export default ReactCaptone;
