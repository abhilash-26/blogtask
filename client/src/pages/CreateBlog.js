import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label, RowWrapper, Title } from "./Login";
import axios from "axios";
import { useHistory } from "react-router";
const Container = styled.div``;
const TitleInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 400px;
`;
const ContentField = styled.textarea`
  height: 300px;
  width: 400px;
  border-radius: 10px;
  padding: 10px;
`;
const Button = styled.button`
  border-radius: 8px;
  border: none;
  background-color: orange;
  padding: 10px;
  cursor: pointer;
`;

const CreateBlog = () => {
  const author = localStorage.getItem("userId");
  const history = useHistory();
  const [allData, setAllData] = useState({
    author: author,
    title: "",
    content: "",
  });
  const handleSubmit = async () => {
    try {
      if ((allData.title && allData.content) == "") {
        alert("fill all the fields");
      } else {
        const result = await axios({
          method: "post",
          url: "http://localhost:8080/api/blog/create",
          data: allData,
        });
        console.log(result);
        if (result.data.status == 0) {
          history.push("/user-home");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setAllData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>Add a new blog...</Title>
      <RowWrapper>
        <Label>Title</Label>
        <TitleInput
          name="title"
          value={allData.title}
          onChange={handleChange}
        />
      </RowWrapper>
      <RowWrapper>
        <Label>description</Label>
        <ContentField
          name="content"
          value={allData.content}
          onChange={handleChange}
        />
      </RowWrapper>
      <Button onClick={handleSubmit}>Click to submit</Button>
    </Container>
  );
};

export default CreateBlog;
