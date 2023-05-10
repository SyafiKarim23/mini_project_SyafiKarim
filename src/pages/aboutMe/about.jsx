import React, { useState } from "react";
import "./about.css";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import { Card, Row, Col, Input } from "antd";
import { useQuery } from "@apollo/client";
import { GET_BARANG } from "../CRUD/query/users-query-barang";

const about = () => {
  const {
    data: barangData,
    loading: isBarangLoading,
    error: usersError,
  } = useQuery(GET_BARANG);

  return (
    <div>
      <h1>Daftar Barang dan Product Di Toko Kami</h1>

      <Row gutter={[10]}>
        {isBarangLoading ? (
          <LoadingComponent />
        ) : (
          barangData?.barang?.map((item, index) => (
            <Col md={8} sm={4}>
              <Card>
                <div key={index}>
                  <img src={item.avatar} height={80} width={80} />
                  <div className="namaBarang">{item.namaBarang}</div>
                  <hr />
                  <div className="harga">Rp.{item.harga}</div>
                </div>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default about;
