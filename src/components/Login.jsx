import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // default data for testing
  const defaultEmail = "prince@gmail.com";
  const defaultPass = "prince123";

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } 
    else if(email === defaultEmail && password === defaultPass){
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    }
    else {
      setError("Invalid email or password");
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-20 px-60 bg-[#55D6C2]">
      <form
        onSubmit={handleLogin}
        className="bg-[#A2E2D8] p-10 px-50 rounded shadow-md flex flex-col items-center w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Helpdesk System</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4 bg-white"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 bg-white"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        {error && (
          <p className="text-red-500 mt-2 text-sm text-center">{error}</p>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm">Don&apos;t have an account?</p>
          <button
            type="button"
            onClick={goToSignup}
            className="text-blue-600 hover:underline mt-1"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
