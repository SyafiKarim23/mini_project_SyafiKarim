// import React, { useEffect, } from "react";
import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
import "./about.css";
import { USERS_DATA } from "./constants";
// import { useGetUsers } from "./hooks/useUsersData";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import { Card, Row, Col, Input } from "antd";
import { useQuery } from "@apollo/client";
import { GET_BARANG } from "../CRUD/query/users-query-barang";
import Gap from "../../components/gap/gap";
import { SearchOutlined } from "@ant-design/icons";
import HeaderComponents from "../../components/layouts/Header/HeaderComponents";

const about = () => {
  // const { id } = useParams();

  // // Get user data
  // const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();

  // console.log({ usersData });

  // // hooks aktifasi
  // useEffect(() => {
  //   getUsersData();
  // }, []);

  // Get Data
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

      {/* {isLoadingUsersData ? (
        <LoadingComponent />
      ) : (
        usersData?.map((user) => (
          <Card title={user.firstName + " " + user.lastName} key={user.id}>
            <div>{user.age}</div>
            <div>{user.hobby}</div>
            <div>{user.address}</div>
          </Card>
        ))
      )} */}
    </div>
  );
};

export default about;
