import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Signin() {

  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [workAddress, setWorkAddress] = useState("");
  const [password, setPassword] = useState("");

  const [status,setStatus] = useState ("Please enter password");


  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            SACCO AUTOMATION SYSTEM
          </span>
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
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              FAQ
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              CONTACT US
            </a>
          </div>
          <div>
            <a
              href="/"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Back to login
            </a>
          </div>
        </div>
      </nav>

      <div class="flex flex-col justify-center items-center mt-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:3002/signin", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
            },
              body: JSON.stringify({
                mobileNumber: mobileNumber,
                workAddress: workAddress,
                email: email, 
                idNumber: idNumber,
                homeAddress: homeAddress,
                username: username,
                password: password,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if(data.status === "success"){
                  e.target.reset()
                  console.log("redirecting")
                  navigate("/", {replace:true})
                }
                setStatus(data.status)
              })
          }}
          class="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-10 "
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              IDNUMBER
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="IDNUMBER"
              type="number"
              placeholder="National Id"
              onChange={(e) => {
                setIdNumber(e.target.value);
              }}
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              EMAIL
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="EMAIL"
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Mobile Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Mobile"
              type="text"
              placeholder="MOBILE NUMBER"
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              HOME ADDRESS
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ADDRESS"
              type="text"
              placeholder="YOUR HOME ADDRESS"
              onChange={(e) => {
                setHomeAddress(e.target.value);
              }}
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              WORK ADDRESS
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="WADDRESS"
              type="text"
              placeholder="YOUR WORK ADDRESS"
              onChange={(e) => {
                setWorkAddress(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p class="text-red-500 text-xs italic">{status}</p>
          </div>

          <div class="flex items-center justify-center">
            <button
            onClick={Signin}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SignIn
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
