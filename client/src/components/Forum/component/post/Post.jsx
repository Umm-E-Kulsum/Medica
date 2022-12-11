import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="BLOCK__post">
      {post.photo && <img className="BLOG__postImg" src={PF + post.photo} alt="" />}
      <div className="BLOG__postInfo">
        <div className="BLOG__postCats">
          {post.categories.map((c) => (
            <span className="BLOG__postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="BLOG__postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="BLOG__postDesc">{post.desc}</p>
    </div>
  );
}
