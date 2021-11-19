import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import {
//   Container,
//   Input,
//   RowWrapper,
//   Label,
//   Title,
//   SubmitButton,
// } from "../components/Register";

export const Container = styled.div`
  height: auto;
  width: 50%;
  padding: 20px;
  box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 10px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-family: Lato;
`;
export const RowWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.label`
  font-family: Lato;
  font-weight: 500;
  margin-right: 10px;
`;
export const Input = styled.input`
  width: 50%;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
`;
export const Select = styled.select`
  width: 30%;
  border-radius: 5px;
`;
export const Option = styled.option``;
export const TextArea = styled.textarea`
  border-radius: 5px;
`;
export const SubmitButton = styled.button`
  border: none;
  background-color: orange;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;

function Login() {
  const [allData, setAllData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setAllData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/user/login",
        data: allData,
      });

      if (result.data.status == 0) {
        localStorage.setItem("userId", result.data.user._id);
        localStorage.setItem("role", result.data.user.role);
        if (result.data.user.role === "A") {
          history.push("/admin-home");
        } else {
          history.push("/user-home");
        }
      } else {
        alert(result.data.message);
      }
      console.log(result);
    } catch (error) {
      alert("something went wrong");
    }
  };
  return (
    <Container>
      <Title>SignIn</Title>
      <RowWrapper>
        <Label>Email :-</Label>
        <Input name="email" value={allData.email} onChange={handleChange} />
      </RowWrapper>
      <RowWrapper>
        <Label>Password :-</Label>
        <Input
          name="password"
          value={allData.password}
          onChange={handleChange}
        />
      </RowWrapper>
      <SubmitButton onClick={handleSubmit}>Login</SubmitButton>
      <p>
        Don't have a account yet?{" "}
        <Link style={{ textDecoration: "none" }} to="/register">
          signUp
        </Link>
      </p>
    </Container>
  );
}

export default Login;
