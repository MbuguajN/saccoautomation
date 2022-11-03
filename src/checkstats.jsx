import Layout from "./layout";

export default function CheckStats() {
  return (
    <Layout>
      <div className="stats shadow mt-10">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              
            </svg>
          </div>
          <div className="stat-title">Loan Available</div>
          <div className="stat-value text-primary">25000</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              
            </svg>
          </div>
          <div className="stat-title">Loans Taken</div>
          <div className="stat-value text-secondary">2</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online"></div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
        </div>
      </div>
      <div className="stats shadow mt-11">
        <div className="stat">
          <div className="stat-title">Yearly devidents</div>
          <div className="stat-value">89,400</div>
        </div>
      </div>
      <div className="stats bg-primary text-primary-content mt-12">
        <div className="stat">
          <div className="stat-title">savings balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">loans Limit</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">deposit</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
