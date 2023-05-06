import React from "react";
import { Input, Button } from "antd";
import "./beranda.css";
import { Col, Row, Card } from "antd";
import Gap from "../../components/gap/gap";

const Beranda = () => {
  return (
    <>
      <div className="Head">
        <Input
          placeholder="Cari Barang"
          //   value={query}
          //   onChange={handleChange}
          style={{ width: 180, height: 30 }}
        />
        <Button type="primary" htmlType="submit">
          Cari
        </Button>
      </div>
      <Gap height={10} />
      <div>
        <Row className="row">
          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>
        </Row>
        <Row className="row">
          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>
        </Row>
        <Row className="row">
          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>

          <Card className="card">
            <Col className="gutter-row">
              <img src="" alt="" className="foto" />
              <Gap height={10} />
              <div className="konten"></div>
            </Col>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default Beranda;
