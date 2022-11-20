import Adminlayout from "./adminlayout";
import { useState } from "react";
import { useEffect } from "react";
export default function Loanrequest() {
  const [loans,setLoans] = useState();
  useEffect(()=>{
    getLoans()
  })
  const getLoans = () => {
    fetch("http://localhost:3002/getLoans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoans(data.loans);
      });
  };
  const rows = loans?.map((loan, index) => {
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
  });
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
          <tbody>{rows}</tbody>
          <tfoot></tfoot>
        </table>
        <select
          
          className="select select-bordered m-4 w-full max-w-xs"
        >
          <option disabled selected>
            Select loan to approve
          </option>
          
        </select>
      </div>
    </Adminlayout>
  );
}
