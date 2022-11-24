import Layout from "./layout";
import { useState } from "react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
export default function RequestLoan() {
  const [allowRequest, setAlLowRequest] = useState(false);
  const [guarantors, setGuarantors] = useState([]);
  const [loanLimit,setLoanLimit] = useState();
  const [amount, setLoanAmount] = useState();
  const [selectedGuarantor, setSelectedGuarantor] = useState("");
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

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3002/addLoan", {
      method: "POST",
      body: JSON.stringify({
        guarantor: data.guarantor,
        loanAmount: data.loanAmount,
        token: sessionStorage.getItem("auth"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getGuarantors = () => {
    fetch("http://localhost:3002/guarantors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGuarantors(data);
      });
  };
  /* const stkPushSim = () => {
    fetch("http://localhost:3002/stk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: "113224807",
        amount: 1,
      }),
    });
  };*/
  useEffect(() => {
    //stkPushSim();
    getloanLimit();
    getGuarantors();
    userloans();
  }, []);
  if (guarantors) {
    console.log(guarantors);
  }
  const rows = guarantors?.results?.map((guarantor, index) => {
    return (
      <tr>
        <th></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar"></div>
            <div>
              <div className="font-bold">{guarantor.username}</div>
              <div className="text-sm opacity-50">{guarantor.email}</div>
            </div>
          </div>
        </td>
        <td>
          {guarantor.IdNumber}
          <br />
          <span className="badge badge-ghost badge-sm">
            {guarantor.WorkAddress}
          </span>
        </td>
      </tr>
    );
  });
  const getloanLimit = () => {
    fetch("http://localhost:3002/loanlimit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: sessionStorage.getItem("auth") }),
    }).then((res) => res.json()).then(data=>{
      setLoanLimit(data.loanLimit)
    });
  };
  return (
    <Layout>
      <div>
        <h1 className="text-center my-4 font-mono text-2xl text-green-400"> REQUEST LOAN</h1>
      </div>
      <div className="overflow-auto my-8 w-full h-64">
        
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Guarantor</th>
              <th>Id Number</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <select
          {...register("guarantor", { required: "select a guarantor" })}
          className="select select-bordered m-4 w-full max-w-xs"
        >
          <option disabled selected>
            Pick your Loan guarantor
          </option>
          {guarantors?.results?.map((guarantor, index) => {
            return (
              <option key={index} val={guarantor.username}>
                {guarantor.username}
              </option>
            );
          })}
        </select>
        <div className="stats bg-accent text-primary-content my-3">
          <div className="stat">
            <div className="stat-title">loan limit</div>
            <div className="stat-value">KSH {loanLimit}</div>
            <label className="label">
              <span className="label-text">Enter amount</span>
            </label>
            <label className="input-group">
              <span>Amount</span>
              <input
                type="number"
                {...register("loanAmount", {
                  required: "set a loan amount before submitting",
                  valueAsNumber: true,
                })}
                placeholder="enter amount"
                className="input input-bordered text-black"
              />
              <span>ksh</span>
            </label>
            <div className="stat-actions ">
              <button className="btn btn-sm btn-success bg-rose-400">
                Request loan
              </button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">loan balance</div>
            <div className="stat-value">ksh {loan?.amount}</div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
