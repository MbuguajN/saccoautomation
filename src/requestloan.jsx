import Layout from "./layout";
import { useState } from "react";
import { useEffect } from "react";

export default function RequestLoan() {
  const [allowRequest, setAlLowRequest] = useState(false);
  const [guarantors, setGuarantors] = useState([]);
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
  const stkPushSim = () => {
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
  };
  useEffect(() => {
    stkPushSim();
    getGuarantors();
  }, []);
  if (guarantors) {
    console.log(guarantors);
  }
  const rows = guarantors?.results?.map((guarantor, index) => {
    return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
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
  return (
    <Layout>
      <div className="overflow-auto my-8 w-full">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Guarantor</th>
              <th>Id Number</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div className="stats bg-accent text-primary-content my-3">
        <div className="stat">
          <div className="stat-title">loan limit</div>
          <div className="stat-value">KSH 89,400</div>
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group">
            <span>Amount</span>
            <input
              type="text"
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
          <div className="stat-value">KSH 0</div>
        </div>
      </div>
    </Layout>
  );
}
