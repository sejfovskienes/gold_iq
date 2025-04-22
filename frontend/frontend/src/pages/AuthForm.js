import React, {useState} from "react";

const AuthForm = () => {
    const containerStyle = {
        marginTop: "3rem",
        padding: "2rem",
        maxWidth: "500px",
        minHeight:"350px",
        backgroundColor: "#fdfdfd",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        fontFamily: "Arial, sans-serif",
        color: "#000",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"100px"
      };
      
      const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "1.5rem",
      };
      
      const toggleButtonStyle = (active) => ({
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: active ? "#131842" : "#e0e0e0",
        color: active ? "#fff" : "#000",
        border: "none",
        borderRadius: "0.5rem",
        cursor: "pointer",
      });
      
      const inputStyle = {
        width: "100%",
        padding: "0.75rem",
        borderRadius: "0.5rem",
        border: "1px solid #ccc",
        fontSize: "1rem",
        marginBottom: "1rem",
        color: "#000",
      };
      
      const submitButtonStyle = {
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#131842",
        color: "#fff",
        border: "none",
        borderRadius: "0.5rem",
        cursor: "pointer",
        width: "100%",
      };

      const [isRegister, setIsRegister] = useState(true);
      const [formData, setFormData] = useState({
            fullName: "",
            email: "",
            password: "",
            repeatPassword: "",
      });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isRegister) {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Registration successful!");
        setIsRegister(false); 
      } else {
        alert(`Registration failed: ${data.detail}`);
      }
    } else {
      
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("fullName", data.full_name);
        alert(`Welcome back, ${data.full_name}!`);
        window.location.href = "/"; 

      } else {
        alert(`Login failed: ${data.detail}`);
      }
    }
  
    setFormData({
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
  };
  
  

  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <button
          style={toggleButtonStyle(isRegister)}
          onClick={() => setIsRegister(true)}
        >
          Register
        </button>
        <button
          style={toggleButtonStyle(!isRegister)}
          onClick={() => setIsRegister(false)}
        >
          Login
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <input
              style={inputStyle}
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {isRegister && (
          <input
            style={inputStyle}
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
        )}
        <button style={submitButtonStyle} type="submit">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;