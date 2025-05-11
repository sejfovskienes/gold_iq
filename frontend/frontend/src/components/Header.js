import React from "react";
import { BrowserRouter as Router, Link, useNavigate} from 'react-router-dom';
import { BsGraphUpArrow } from "react-icons/bs";


const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    navigate("/");
  };

  const isLoggedIn = !!token;

    const headerStyle = {
        width:"100%",
        height:"75px",
        backgroundColor:"#131842 ",
        alignItems:"center",
        marginTop:"0px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      };

      const logoStyle = {
        color:"#fff",
        marginLeft:"-38px",
        fontSize: "25px",
      };

      const navStyle = {
        color:"#fff",
        display:"flex",
        gap:"15px",
        width:"100px",
      };

      const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        marginLeft:"15px",
        marginRight:"15px",
      };
      
      const authDivStyle = {
        display:"flex",
      }

      const buttonStyle = {
        width:"155px",
        height:"35px",
        backgroundColor:"#fff",
        color:"#0a2540",
        borderRadius:"20px",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        marginRight:"15px",
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
      };

      const buttonTextStyle = {
        color:"#0a2540",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
      }

    return (
        
      <header style={{ backgroundColor: "#131842", display: "flex", justifyContent: "space-around", alignItems: "center", height: "75px" }}>
      <h2 style={{ color: "#fff", }}>GoldIQ</h2>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        {isLoggedIn && <Link to="/dashboard" style={linkStyle}>Dashboard</Link>}
      </nav>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout} style={buttonStyle}>Log out</button>
        ) : (
          <Link to="/authenticate" style={buttonStyle}>Get started!</Link>
        )}
      </div>
    </header>
    )
}

export default Header;