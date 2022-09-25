import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { FcMenu } from "react-icons/fc"
import Layout from './layout';
import { useEffect ,useState} from 'react';

function App() {
  const [data,setData] = useState();
  useEffect(()=>{
    getUserData()
  },[])
  const getUserData = () => {
    fetch("http://localhost:3002/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: sessionStorage.getItem("auth"),
      }),
    }).then((res) => res.json()).then((data) =>{
      console.log(data)
      setData(data);
    })
  }
  return (
    <Layout>
      <div className="float-left">
        <div className="float-right">
          <span>hello world</span>
        </div>


      </div>


    </Layout>

  );
}

export default App;
