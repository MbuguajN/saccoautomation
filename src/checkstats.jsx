import Layout from "./layout";
import { useNavigate } from "react-router-dom";

export default function CheckStats() {
  const navigate = useNavigate();
  const navigateupdate = () => {
    // 👇️ navigate to /
    navigate("/updatesavings");
  };
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
          <div className="stat-value text-primary">25000</div>
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
          <div className="stat-value text-secondary">2</div>
        </div>

        <div className="stat">
          <div className="stat-title">Yearly Devidents</div>
          <div className="stat-value text-secondary">2</div>
        </div>
        <div className="stat">
          <div className="stat-title">savings balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button onClick={navigateupdate} className="btn btn-sm btn-success">
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
            <th>Type</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
      <button className="btn btn-info">Download Transations pdf</button>
    </Layout>
  );
}
