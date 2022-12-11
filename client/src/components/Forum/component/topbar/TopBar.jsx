import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="BLOG__top">
      <div className="BLOG__topLeft">
        <i className="BLOG__topIcon fab fa-facebook-square"></i>
        <i className="BLOG__topIcon fab fa-twitter-square"></i>
        <i className="BLOG__topIcon fab fa-pinterest-square"></i>
        <i className="BLOG__topIcon fab fa-instagram-square"></i>
      </div>
      <div className="BLOG__topCenter">
        <ul className="BLOG__topList">
          <li className="BLOG__topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="BLOG__topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="BLOG__topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="BLOG__topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="BLOG__topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="BLOG__topRight">
        {user ? (
          <Link to="/settings">
            <img className="BLOG__topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="BLOG__topList">
            <li className="BLOG__topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="BLOG__topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="BLOG__topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
