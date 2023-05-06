import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./about.css";
import { USERS_DATA } from "./constants";
import { useGetUsers } from "./hooks/useUsersData";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { Card } from "antd";

const about = () => {
  const { id } = useParams();

  // Get user data
  const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();

  console.log({ usersData });

  // hooks aktifasi
  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      <h1>About Me</h1>

      {isLoadingUsersData ? (
        <LoadingComponent />
      ) : (
        usersData?.map((user) => (
          <Card title={user.firstName + " " + user.lastName} key={user.id}>
            <div>{user.age}</div>
            <div>{user.hobby}</div>
            <div>{user.address}</div>
          </Card>
        ))
      )}
    </div>
  );
};

export default about;
