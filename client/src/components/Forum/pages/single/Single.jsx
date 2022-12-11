import SinglePost from "../../component/singlePost/SinglePost.jsx";
import Sidebar from "../../component/sidebar/Sidebar.jsx";

import "./single.css";

export default function Single() {
  return (
    <div className="BLOG__single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}
