import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { Container } from "./Login";
import axios from "axios";
import { useLocation } from "react-router";

const AllBlogByOneUser = () => {
  const [allBlog, setAllBlog] = useState([]);
  const location = useLocation();
  const user = location.state;
  console.log(user, "jjjjj");
  useEffect(() => {
    const getData = async (req, res) => {
      try {
        const AllData = await axios({
          method: "post",
          url: "http://localhost:8080/api/blog/get-all",
          data: { author: user._id },
        });
        console.log(AllData, "dfg");
        setAllBlog(AllData.data.blog);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Container style={{ boxShadow: "none", border: "1px solid red" }}>
      <h2>All Blogs are </h2>
      {/* <UserCard name={user} /> */}
      {allBlog?.map((item, index) => (
        <UserCard key={index} blog={item} />
      ))}
      {allBlog.length == 0 && <h2>No blogs found !!</h2>}
    </Container>
  );
};

export default AllBlogByOneUser;
