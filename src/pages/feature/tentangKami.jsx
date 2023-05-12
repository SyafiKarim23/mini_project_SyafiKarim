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
                href="https://www.google.com/maps/place/7%C2%B043'00.8%22S+112%C2%B016'36.0%22E/@-7.7170969,112.2765223,19z/data=!4m13!1m8!3m7!1s0x2e7867b7d40e209f:0x7201f1d2ee58753f!2sBulusari,+Kebondalem,+Kec.+Bareng,+Kabupaten+Jombang,+Jawa+Timur+61474!3b1!8m2!3d-7.7169693!4d112.2770775!16s%2Fg%2F11g64zlgcs!3m3!8m2!3d-7.7168889!4d112.2766667"
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
