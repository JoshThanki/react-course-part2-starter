import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "../routing/hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();

  const { data, error, isLoading } = usePosts(userId);

  if (error) return <p>{error.message}</p>;

  const userList = ["", 1, 2, 3];
  return (
    <>
      <select
        className="form-select mb-3"
        value={userId}
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        {userList.map((index) => (
          <option value={index}> {index ? "User " + index : "All"} </option>
        ))}
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
