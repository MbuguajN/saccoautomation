import Layout from "./layout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiLocationPlus } from "react-icons/bi";

export default function CheckStats() {
  const [data, setData] = useState();
  const [transactions, setTransactions] = useState();
  const [loan,setLoan] = useState();

  const navigate = useNavigate();
  const navigateupdate = () => {
    // 👇️ navigate to /
    navigate("/updatesavings");
  };
  const getUserData = () => {
    fetch("http://localhost:3002/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: sessionStorage.getItem("auth"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result[0]);
        setData(data.result[0]);
      });
  };
  const userloans = () => {
    fetch("http://localhost:3002/getLoanCount", {
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
  
  const getUserTransactions = () => {
    fetch("http://localhost:3002/getUserTransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        token: sessionStorage.getItem("auth"),
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        setTransactions(res.transaction);
      });
  };
  useEffect(() => {
    getUserTransactions();
    getUserData();
    userloans();
  }, []);
  if (transactions && loan) {
    console.log(transactions);
    console.log(loan)

    return (
      <Layout>
        <div className="stats shadow mt-5">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              ></svg>
            </div>
            <div className="stat-title">Loan Limit</div>
            <div className="stat-value text-primary">KSH 25000</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              ></svg>
            </div>
            <div className="stat-title">Loans Taken</div>
            <div className="stat-value text-secondary">{loan?.length}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Yearly Devidents</div>
            <div className="stat-value text-secondary">{(data.Balance * 10) / 100}</div>
          </div>
          <div className="stat">
            <div className="stat-title">savings balance</div>
            <div className="stat-value">KSH {data.Balance}</div>
            <div className="stat-actions">
              <button
                onClick={navigateupdate}
                className="btn btn-sm btn-success"
              >
                Add Savings
              </button>
            </div>
          </div>
        </div>
        <h1 className="mt-5 text-center text-fuchsia-400 font-sans">
          YOUR TRANSACTIONS
        </h1>
        <table className="table w-full mt-16 ">
          <thead>
            <tr>
              <th></th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction, index) => {
              return (
                <tr>
                  <th></th>

                  <td>{transaction.id}</td>
                  <td>{transaction.amount}</td>
                  <td>{`${transaction.transactionDate}`}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
        <button className="btn btn-info">Download Transations pdf</button>
      </Layout>
    );
  }
}
