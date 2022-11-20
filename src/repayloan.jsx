import Layout from "./layout";

export default function RepayLoan() {
  return (
    <Layout>
      <div>
        <h1 className="text-center my-8 font-mono text-2xl text-blue-700"> REPAY LOAN</h1>
      </div>
      <div className="stats my-8 bg-primary text-primary-content mx-32">
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
  );
}
