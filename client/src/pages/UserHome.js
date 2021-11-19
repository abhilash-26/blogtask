import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AllBlogByOneUser from "./AllBlogByOneUser";
import { useHistory } from "react-router";
import { Container, RowWrapper, Title } from "./Login";
import UserCard from "../components/UserCard";
import axios from "axios";

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: orange;
`;

const UserHome = () => {
  const history = useHistory();
  const userId = localStorage.getItem("userId");
  const [blogs, setBlogs] = useState([]);
  console.log(userId);
  useEffect(() => {
    const getAllBlog = async () => {
      console.log(userId);
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/blog/get-all-approved",
        data: { userId },
      });
      setBlogs(result.data);
    };
    getAllBlog();
  }, []);
  return (
    <Container>
      <Button onClick={() => history.push("/create-blog")}>
        Add a new blog
      </Button>
      <Title>All blogs by me</Title>
      <RowWrapper>
        {blogs?.map((item, index) => (
          <UserCard blog={item} />
        ))}
        {blogs.length == 0 && (
          <h3>
            If you have created a blog then wait till it get approved !!!! or
            create new
          </h3>
        )}
      </RowWrapper>
    </Container>
  );
};

export default UserHome;
