import React, { useState } from "react";
import { Input, Label, RowWrapper } from "./Login";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  border-radius: 7px;
  padding: 8px;
  background-color: blue;
  width: max-content;
  color: white;
`;

const AddUser = () => {
  const [allData, setAllData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    setAllData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = async () => {
    if (
      (allData.name && allData.email && allData.password && allData.phone) == ""
    ) {
      alert("plaese fill all the fields");
    } else {
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/user/register",
        data: allData,
      });
      console.log(result);
      if (result.data.status == 0) {
        history.push("/admin-home");
      }
    }
  };
  return (
    <Container>
      <p>Enter the user details you want to add</p>
      <RowWrapper>
        <Label>Name</Label>
        <Input name="name" value={allData.name} onChange={handleChange} />
      </RowWrapper>
      <RowWrapper>
        <Label>Email</Label>
        <Input name="email" value={allData.email} onChange={handleChange} />
      </RowWrapper>
      <RowWrapper>
        <Label>Password</Label>
        <Input
          name="password"
          value={allData.password}
          onChange={handleChange}
          type="password"
        />
      </RowWrapper>
      <RowWrapper>
        <Label>Phone</Label>
        <Input
          name="phone"
          type="number"
          value={allData.phone}
          onChange={handleChange}
        />
      </RowWrapper>
      <Button onClick={handlesubmit}>Create User</Button>
    </Container>
  );
};

export default AddUser;
