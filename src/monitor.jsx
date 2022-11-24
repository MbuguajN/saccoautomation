import { useEffect } from "react";
import { useState } from "react";
import Adminlayout from "./adminlayout";

export default function Monitor() {
  const [transactions, setTransactions] = useState();
  const getTransaction = () => {
    fetch("http://localhost:3002/getTransactions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions);
      });
  };
  useEffect(()=>{
    getTransaction()
  },[])
  if (transactions) {
    console.log(transactions);
    return (
      <Adminlayout>
        <div>
          <table className="table w-full mt-16 ">
            <thead>
              <tr>
                <th></th>
                <th>username</th>
                <th>transactionId</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{transactions?.map((transaction,index)=>{
              return(
                <tr>
                  <th></th>
                  <td>{transaction.User.username}</td>
                  <td>{transaction.id}</td>
                  <td>{transaction.amount}</td>
                </tr>
              )
            })}</tbody>
            <tfoot></tfoot>
          </table>
          <button className="btn btn-info">Download Transation pdf</button>
        </div>
      </Adminlayout>
    );
  }
}
