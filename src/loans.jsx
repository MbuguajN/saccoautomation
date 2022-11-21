import { useEffect, useState } from "react";
import Adminlayout from "./adminlayout";

export default function Loans() {
  const [loans, setLoans] = useState();
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
  useEffect(() => {
    getLoans();
  }, []);
  if (loans) {
    return (
      <Adminlayout>
        <div>
          <table className="table w-full mt-16 ">
            <thead>
              <tr>
                
                <th>username</th>
                <th>Id Number</th>
                <th>Guarantor</th>
                <th>Amount</th>
                
              </tr>
            </thead>
            <tbody>
              {loans?.map((loan, index) => {
                console.log(loan?.statusAdminAccept);
                if(loan?.statusAdminAccept){
                  return (
                    <tr>
                      <td>{loan.User.username}</td>
                      <td> {loan.User.IdNumber}</td>
                      <td>{loan.loan_guarantors.guarantor.username}</td>
                      <td>{loan.amount} </td>
                    </tr>
                  );
                }
                 
                
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
          <select className="select select-bordered m-4 w-full max-w-xs">
            <option disabled selected>
              Select User to warn
            </option>
          </select>
        </div>
      </Adminlayout>
    );
  }
}
