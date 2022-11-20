
import './App.css';
import { Link } from 'react-router-dom';
import Layout from './layout';
import { useEffect, useState } from 'react';
import Profile from './UserProfile';

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    getUserData()
  }, [])
  const getUserData = () => {
    fetch("http://localhost:3002/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: sessionStorage.getItem("auth"),
      }),
    }).then((res) => res.json()).then((data) => {
      console.log(data.result[0])
      setData(data.result[0]);
    })
  }
  if(data){}
  return (
    <Layout>
      {data &&
        <Profile data={data}/>}
      
    
        
    </Layout>

  );
  
}

export default App;
