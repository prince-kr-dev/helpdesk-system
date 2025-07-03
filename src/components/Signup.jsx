import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-20 px-60 bg-[#55D6C2]">
      <form
        onSubmit={handleSignup}
        className="bg-[#A2E2D8] p-10 px-40 rounded shadow-md flex flex-col items-center w-full"
      >
        <h2 className="text-4xl font-bold mb-5 text-center">Helpdesk System</h2>
        <p className="mb-10 font-medium">Sign up here</p>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-4 bg-white"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded mb-4 bg-white"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4 bg-white"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />


        <button
          type="submit"
          className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}