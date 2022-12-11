import "./header.css";

export default function Header() {
  return (
    <div className="BLOG__header">
      <div className="BLOG__headerTitles">
        <span className="BLOG__headerTitleSm"><h3>Welcome To Medi Buddy Blog Page</h3></span>
        
      </div>
      <img
        className="BLOG__headerImg"
        src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    </div>
  );
}
