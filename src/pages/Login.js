import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-2 mb-2 border"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-2 mb-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
