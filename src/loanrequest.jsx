import Adminlayout from "./adminlayout";
import { useState } from "react";
import { useEffect } from "react";
export default function Loanrequest() {
  const [loans, setLoans] = useState();
  const [id, setLoanId] = useState();
  useEffect(() => {
    getLoans();
  });
  const getLoans = () => {
    fetch("http://localhost:3002/getLoans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.loans);
        setLoans(data.loans);
      });
  };
  if (loans) {
    return (
      <Adminlayout>
        <div>
          <table className="table w-full mt-16 ">
            <thead>
              <tr>
                <th></th>
                <th>username</th>
                <th>Id Number</th>
                <th>Guarantor</th>
                <th>Guarantor Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {loans?.map((loan, index) => {
                if (loan.statusAdminAccept == false) {
                  return (
                    <tr>
                      <th></th>
                      <td>{loan.User.username}</td>
                      <td> {loan.User.IdNumber}</td>
                      <td>{loan.loan_guarantors.guarantor.username}</td>
                      <td>{`${loan.statusGuaratorAccept}`}</td>
                      <td>{loan.amount} </td>
                    </tr>
                  );
                }
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
          <select
            value={id}
            onChange={(e) => {
              setLoanId(e.target.value);
            }}
            className="select select-bordered m-4 w-full max-w-xs"
          >
            <option disabled selected>
              Select loan to approve
            </option>
            {loans?.map((val, index) => {
              if (val.statusAdminAccept == false) {
                return <option value={val?.id}>{val.User.username}</option>;
              }
            })}
          </select>
          <button
            onClick={() => {
              console.log(id);
              fetch("http://localhost:3002/adminLoanApproval", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }),
              });
            }}
            className="btn"
          >
            submit
          </button>
        </div>
      </Adminlayout>
    );
  }
}
