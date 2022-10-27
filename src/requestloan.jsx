import Layout from "./layout";

export default function RequestLoan() {
  return (
    <Layout>
      <div className="stats bg-primary text-primary-content my-10">
        <div className="stat">
          <div className="stat-title">loan limit</div>
          <div className="stat-value">KES 89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Request loan</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">loan balance</div>
          <div className="stat-value">KES 0</div>
        </div>
      </div>
    </Layout>
  );
}
