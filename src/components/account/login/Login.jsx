import React, { useState,useContext } from 'react';
import axios from 'axios';
import { AccountContest } from '../../../contest/AccountProvider';
import './login.css';
const Login = () => {
  const { setAccount }=useContext(AccountContest);
  const [formData, setFormData] = useState({
    email: '', // Change 'username' to 'email'
    password: '',
  });
//   const history = useNavigate (); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleRegisterClick = () => {
    // navigate('/register'); // Redirect to the /register route when the button is clicked
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response);
      const imageData = response.data.message.img.data;
      const contentType = response.data.message.img.contentType;

      // Create a Blob from the image data with the correct content type
      const blob = new Blob([imageData], { type: contentType });

      // Create a URL for the Blob
      const imageUrl = URL.createObjectURL(blob);
      console.log(imageUrl);
      // Create an anchor element to provide a download link
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = 'image.png'; // Set the desired filename and extension
      a.style.display = 'none';
      console.log(a);
      // Append the anchor element to the document body and trigger a click to start the download
      document.body.appendChild(a);
      a.click();
      // Remove the anchor element after the download is initiated
      document.body.removeChild(a);
      const obj={
        Name : response.data.message.name,
        imageURL: imageUrl
      }
      setAccount(obj);
    } catch (error) {
      // Handle login error here
      console.error('Login failed:', error.message);
      if (error.response && error.response.status === 405 && error.response.data.message === "Invalid credintail") {
        alert('entered wrong password please check your password.');
        // You can also redirect to the login page after showing the error message
        // history('/login');
      }
      else{
        // history('/register');
      }
    }
  };

  return (
    <>
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label> {/* Change 'username' to 'email' */}
            <input
              type="text"
              id="email" // Change 'username' to 'email'
              name="email" // Change 'username' to 'email'
              placeholder="Enter your email" // Change 'username' to 'email'
              value={formData.email} // Change 'username' to 'email'
              onChange={handleChange} // Change 'username' to 'email'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
          <button className="login-btn register-btn" onClick={handleRegisterClick}>Register</button>
          
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;