import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Feed() {
  const[posts,setPosts] =useState([]);

  useEffect(() =>
  {
  const fetchPosts = async () =>
  { 
const res =
await axios.get("http://localhost:8800/api/posts/timeline/63d916a946ab0a104d73481f")
setPosts(res.data);

  };
  fetchPosts();
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
