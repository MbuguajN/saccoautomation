import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Adminlogin() {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      username: "admin",
      password: "admin",
    };

    if (
      username === hardcodedCred.username &&
      password === hardcodedCred.password
    ) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);
      //go to www.website.com/todo
      navigate("/admindash");
    } else {
      //bad combination
      alert("wrong email or password combination");
    }
  };
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">ADMIN LOGIN</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
          <div>
            <a
              href="/"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Back to Login
            </a>
          </div>
        </div>
      </nav>

      <div class="flex flex-col justify-center items-center mt-12">
        <form
          onSubmit={handleLoginSubmit}
          class="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-10 "
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleUserNameChange}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={handlePasswordChange}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              LOGIN
            </button>
          </div>
          <div></div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2022 Strath Corp. You demand, We provide .
        </p>
      </div>
    </>
  );
}
