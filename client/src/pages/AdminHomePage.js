import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserCard from "../components/UserCard";
import { Title } from "./Login";
import { useHistory } from "react-router";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Button = styled.button`
  margin-top: 20px;
  width: auto;
  padding: 10px;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: orange;
  font-size: 14px;
  font-weight: 550;
`;
const UserWrapper = styled.div`
  height: 500px;
  width: 600px;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AdminHomePage = () => {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    console.log("ruuuu");
    const getAllUser = async () => {
      const users = await axios({
        method: "post",
        url: "http://localhost:8080/api/user/get-all-author",
      });
      console.log(users);
      setAllUser(users.data.allUser);
    };
    getAllUser();
  }, []);
  const history = useHistory();
  return (
    <Container>
      <Button onClick={() => history.push("/add-user")}>Add new user</Button>
      <Title>All users</Title>
      <UserWrapper>
        {allUser?.map((item, index) => (
          <UserCard name={item} />
        ))}
      </UserWrapper>
    </Container>
  );
};

export default AdminHomePage;
