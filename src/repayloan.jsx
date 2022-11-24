import Layout from "./layout";
import { useEffect, useState } from "react";

export default function RepayLoan() {
  const [loan,setLoan] = useState();
  const userloans = () => {
    fetch("http://localhost:3002/getUserLoan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({
        token: sessionStorage.getItem("auth"),
      })
      
    })
      .then((res) => res.json())
      .then((data) => {
        setLoan(data.loan);
        console.log(data.loan);

      });
      
  };
  useEffect(() => {
    userloans();
  }, []);
  if(loan){
    console.log(loan);
  
  return (
    <Layout>
      <div>
        <h1 className="text-center my-8 font-mono text-2xl text-blue-700"> REPAY LOAN</h1>
      </div>
      <div className="stats my-8 bg-primary text-primary-content mx-32">
        <div className="stat">
          <div className="stat-title">Balance</div>
          <div className="stat-value">{loan.amount} ksh</div>
          <div className="stat-actions"></div>
        </div>

        <div className="stat">
          <div className="stat-title">Amount Paid</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions"></div>
        </div>
      </div>

      <div className="stats shadow bg-stone-400 mx-32">
        <div className="stat">
          <div className="stat-title">DAYS LEFT </div>
          <div className="stat-value">10</div>
        </div>
      </div>
      
      <div className="form-control mx-32">
        <label className="label">
          <span className="label-text">Enter amount to repay</span>
        </label>
        <label className="input-group mx-auto">
          <span>Amount</span>
          <input
            type="text"
            placeholder="enter amount here"
            className="input input-bordered"
          />
          <span>KES</span>
        </label>
        <button className="btn btn-outline btn-primary mt-10 w-20 mx-36">
          submit
        </button>
      </div>
    </Layout>
  )};
}
