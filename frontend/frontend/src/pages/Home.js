import React from "react";

const Home = () => {
    const containerStyle = {
        width:"80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        color: "#000",
        marginLeft:"auto",
        marginRight:"auto",
        font: "Inter",
      };
      
      const titleStyle = {
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        textAlign: "center",
      };

      const titleStyle_2 = {
        fontSize: "1.5rem",
        fontWeight: "medium",
        marginBottom: "1rem",
        textAlign: "center",
      };
      
      const subtitleStyle = {
        fontSize: "1.5rem",
        fontWeight: "400",
        marginBottom: "2rem",
        textAlign: "center",
        maxWidth: "800px",
      };
      
      const cardContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
      };
      
      const cardStyle = {
        backgroundColor: "#f9f9f9",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "1.5rem",
        maxWidth: "300px",
        textAlign: "center",
      };
      
      const cardTitleStyle = {
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "0.75rem",
      };
      
      const cardTextStyle = {
        fontSize: "1rem",
        fontWeight: "400",
        color: "#000",
      };
    
      return (
        <>
            <div style={containerStyle}>
      <h1 style={titleStyle}>GoldIQ</h1>
      <h1 style={titleStyle_2}>Use the abilities of AI to make better analysis of gold market.</h1>
      <br></br>
      <p style={subtitleStyle}>
        Unleash the power of AI to analyze gold prices using a fusion of data — numbers, news, and even price charts.
        Our models help you forecast trends, understand sentiment, and make informed decisions backed by multi-modal data.
      </p>
      <br></br><br></br><br></br>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>⚡ Fast & Interactive</h3>
          <p style={cardTextStyle}>
            React-powered UI with instant feedback, real-time insights, and a smooth user experience.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>📰 Sentiment-Aware Insights</h3>
          <p style={cardTextStyle}>
            Analyze news headlines with natural language processing to gauge the market sentiment around gold.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>🖼️ Visual Pattern Recognition</h3>
          <p style={cardTextStyle}>
            Use AI to detect patterns in gold price chart images — just like a technical analyst would.
          </p>
        </div>

      </div>
    </div>
        </>
      )
}

export default Home;