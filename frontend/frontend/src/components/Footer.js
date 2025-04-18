import React from "react";

const Footer = () => {
    const footerStyle ={
        width:"100%",
        height:"125px",
        marginBottom:"0px",
        backgroundColor:"#131842", 
        bottom: 0,             
        left: 0, 
        display:"flex",
        flexDirection:"column", 
        alignItems:"center",
        
    };

    const style1 = {
        marginLeft:"-1000px"
    };

    const logoStyle = {
        color:"#fff",
    };

    const copyrightTextStyle ={
        color:"#fff",
        marginTop:"-10px",
        fontSize:"12px",
    };

    return(
        <footer style={footerStyle}>
            <div style={style1}>
                <h2 style={logoStyle}>GoldIQ</h2>
                <p style={copyrightTextStyle}>&copy; 2025, All Rights Reserved.</p>
            </div>
             
        </footer>
    )
}

export default Footer;