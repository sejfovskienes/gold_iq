import React from "react";
import { BrowserRouter as Router, Link, useNavigate} from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    color: "#000",
    marginLeft: "auto",
    marginRight: "auto",
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
    marginLeft:"auto",
    marginRight:"auto",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
  };

  const buttonStyle = {
        width:"155px",
        height:"35px",
        backgroundColor:"#131842",
        color:"#fff",
        borderRadius:"20px",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        marginRight:"15px",
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
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

  const sectionStyle = {
    maxWidth: "900px",
    marginTop: "4rem",
    textAlign: "left",
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "1rem",
  };

  const sectionParagraphStyle = {
    fontSize: "1.1rem",
    fontWeight: "400",
    lineHeight: "1.8",
    marginBottom: "1.5rem",
  };

  return (
    <>
      <div style={containerStyle}>
        <h1 style={titleStyle}>GoldIQ</h1>
        <h1 style={titleStyle_2}>
          Use the abilities of AI to make better analysis of gold market.
        </h1>
        <br />
        <p style={subtitleStyle}>
          Unleash the power of AI to analyze gold prices using a fusion of data — numbers, news, and even price charts.
          Our models help you forecast trends, understand sentiment, and make informed decisions backed by multi-modal data.
        </p>
        <br />
        <br />
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

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>📈 Smart Forecasting Models</h3>
            <p style={cardTextStyle}>
              Regression-based machine learning models trained on years of financial and macroeconomic data to predict future gold prices.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>🤖 AI Chat Assistant</h3>
            <p style={cardTextStyle}>
              Get instant answers to your questions about gold markets, trends, and insights from our intelligent chatbot trained on financial data.
            </p>
          </div>
        </div>

        {/* New Sections */}

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>💰📈 Gold Price Prediction</h2>
          <p style={sectionParagraphStyle}>
            Our regression models analyze historical gold data along with external macroeconomic factors — such as inflation, interest rates, oil prices, and currency indices — to generate future price forecasts.
            These predictions are updated regularly and visually represented through charts to help investors make better-informed decisions.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🧠📰 Sentiment Analysis from News</h2>
          <p style={sectionParagraphStyle}>
            Headlines move markets — our AI reads them for you. We scan top financial news sources and use transformer-based NLP models to determine the tone (positive, neutral, or negative) of current gold-related news.
            This sentiment signal is then incorporated into your overall risk and trend analysis.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>💬🤖 Conversational Intelligence</h2>
          <p style={sectionParagraphStyle}>
            Have a question about the gold market? Our AI chatbot is always on. Whether you're curious about price trends, global events affecting gold, or need a summary of the day's financial sentiment, our assistant has your back — trained on gold-centric data and capable of natural, intelligent dialogue.
          </p>
        </div>
      </div>
      <br /><br />
        <br /><br />
<p style={subtitleStyle}>
  To access personalized insights, forecasting tools, and real-time chat assistance, please log in to your account.
  New here? Register now and start unlocking the full potential of GoldIQ.
</p>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "1rem",
  }}
>

    <Link to="/authenticate" style={buttonStyle}>Get started!</Link>

</div>

        <br></br><br></br> <br></br><br></br>
    </>
  );
};

export default Home;
