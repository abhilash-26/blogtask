import React from "react";
import { Container, Title } from "./Login";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router";
import axios from "axios";

const Content = styled.p`
  font-size: 12px;
`;
const Blog = () => {
  const user = localStorage.getItem("role");
  console.log(user, "rol");
  const location = useLocation();
  const blog = location.state;
  const history = useHistory();

  const handleApprove = async () => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8080/api/blog/approve-blog",
      data: { Id: blog._id },
    });
    console.log(result);

    history.push("/all-blog-by-one-user");
  };
  // console.log(blog);
  return (
    <Container>
      {blog.approved == "A" && <p>Blog is approved</p>}
      <Title>{blog.title}</Title>
      <Content>{blog.content}</Content>
      {user == "A" && blog.approved == "N" && (
        <button onClick={handleApprove}>Approve Blog</button>
      )}
    </Container>
  );
};

export default Blog;
