import React, {useState} from "react";

const Contact = () =>{
    const formContainerStyle = {
        marginTop: "3rem",
        padding: "2rem",
        maxWidth: "480px",
        borderRadius: "1rem",
        backgroundColor:"#fdfdfd",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        color: "#000",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"75px",
      };
      
      const formTitleStyle = {
        fontSize: "2rem",
        fontWeight: "600",
        marginBottom: "0.5rem",
      };
      
      const inputStyle = {
        width:"450px",
        padding: "0.75rem",
        borderRadius: "0.5rem",
        border: "1px solid #ccc",
        fontSize: "1rem",
        color: "#000",
        marginTop:"18px",
      };
      
      const textAreaStyle = {
        ...inputStyle,
        minHeight: "120px",
        resize: "vertical",
      };
      
      const buttonStyle = {
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "0.5rem",
        cursor: "pointer",
      };

      const [email, setEmail] = useState("");
      const [subject, setSubject] = useState("");
      const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    const mailData = {
      email,
      subject,
      message,
    };

    console.log("Sending mail:", mailData);

    setEmail("");
    setSubject("");
    setMessage("");

    alert("Your message has been sent!");
  };

    return(
         <div style={formContainerStyle}>
            <h2 style={formTitleStyle}>📬 Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
                <input
                style={inputStyle}
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                /><br></br>

                <input
                style={inputStyle}
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                /><br></br>

                <textarea
                style={textAreaStyle}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                /><br></br><br></br>

                <button style={buttonStyle} type="submit">
                Send Message
                </button>
                <br></br><br></br>
            </form>
        </div>
    )
}

export default Contact;