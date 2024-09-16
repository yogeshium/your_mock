import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.from || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { isLoggedIn,setIsLoggedIn } = useAuth();
  console.log(previousPath);
  //If user already Logged In
  if(isLoggedIn){
    navigate(previousPath);
    return null;
  }

  //when click submit
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const res = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await res.json();
      console.log(parseRes);
      if (parseRes.success) {
        setIsLoggedIn(true);
        navigate(previousPath);
      } else {
        setErrorMsg(parseRes.message);
      }
    } catch (err) {
      setErrorMsg(err.message);
    }
  };
  return (
    <div className="mx-auto max-w-sm space-y-6 p-6 bg-white shadow-md rounded-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        <p className="text-gray-500">
          Enter your email and password to login to your account
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="m@example.com"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {errorMsg ? <div>{errorMsg}</div> : null}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={submitHandler}
        >
          Login
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
          Signup
        </Link>
      </div>
    </div>
  );
}
