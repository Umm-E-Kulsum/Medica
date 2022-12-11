import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="BLOG__sidebar">
      <div className="BLOG__sidebarItem">
        <span className="BLOG__sidebarTitle">HEALTH CARE</span>
        <img
          src="https://media.istockphoto.com/photos/businessman-hold-virtual-medical-network-connection-icons-covid19-picture-id1312765142?s=612x612"
          alt=""
        />
        <p>
          
        "Healthy living" to most people means both physical and mental health are in balance or functioning well together. In many instances, physical and mental health are closely linked, so that a change (good or bad) in one directly affects the other. 
        Consequently, some of the tips will include suggestions for emotional and mental "healthy living."

        </p>
      </div>
      <div className="BLOG__sidebarItem">
        <span className="BLOG__sidebarTitle">CATEGORIES</span>
        <ul className="BLOG__sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="BLOG__sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="BLOG__sidebarItem">
        <span className="BLOG__sidebarTitle">FOLLOW US</span>
        <div className="BLOG__sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
