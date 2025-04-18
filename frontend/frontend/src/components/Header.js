import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Header = () => {
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
        
            <header style={headerStyle}>
                <h3 style={logoStyle}>GoldIQ</h3>
                <nav>
                    <Link to="/home" style={linkStyle}>Home</Link>
                    <Link to="/about" style={linkStyle}>About</Link>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                </nav>
                <div style={authDivStyle}>
                    <div style={buttonStyle}>
                        <Link to="/authenticate" style={buttonTextStyle}>Get started!</Link>
                    </div>
                </div>
            </header>
    )
}

export default Header;