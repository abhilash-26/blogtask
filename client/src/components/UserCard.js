import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const UserCardBox = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 200px;
  width: 150px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UserTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  /* margin: auto; */
`;

const UserCard = ({ name, blog }) => {
  const history = useHistory();
  console.log(blog, "blog");
  return (
    <UserCardBox
      onClick={() =>
        name
          ? history.push({
              pathname: "/all-blog-by-one-user",
              state: name,
            })
          : history.push({
              pathname: "/blog",
              state: blog,
            })
      }
    >
      <UserTitle>
        {name?.name}
        {blog?.title}
      </UserTitle>
    </UserCardBox>
  );
};

export default UserCard;
