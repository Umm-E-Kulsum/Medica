import { useEffect, useState } from "react";
import Header from "../../component/header/Header.jsx";
import Posts from "../../component/posts/Posts.jsx";
import Sidebar from "../../component/sidebar/Sidebar.jsx";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="BLOG__home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
