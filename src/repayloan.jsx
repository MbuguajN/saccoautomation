import Layout from "./layout";

export default function RepayLoan() {
  return (
    <Layout>
      <div
       className="stats my-32 bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions"></div>
        </div>

        <div className="stat">
          <div className="stat-title">Amount Paid</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions"></div>
        </div>
      </div>
      <div className="form-control">
  <label className="label">
    <span className="label-text">Enter amount to repay</span>
  </label>
  <label className="input-group mx-auto">
    <span>Amount</span>
    <input type="text" placeholder="enter amount here" className="input input-bordered" />
    <span>KES</span>
  </label>
  <button className="btn btn-outline btn-primary mt-10 w-20 mx-36">submit</button>
</div>
    </Layout>
  );
}
