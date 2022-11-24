import Adminlayout from "./adminlayout";

function Adminstat() {
  return (
    <Adminlayout>
      <div className="stats shadow mt-10">
        <div className="stat">
          <div className="stat-figure text-primary">
           
          </div>
          <div className="stat-title">Total user in system</div>
          <div className="stat-value text-primary">7</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Number of loans</div>
          <div className="stat-value text-secondary">2</div>
        </div>

        <div className="stat">
          
          <div className="stat-value"> null </div>
          <div className="stat-title">Loans payed back</div>
        </div>
      </div>

      <div className="stats shadow mt-10 ">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total  sacco savings</div>
          <div className="stat-value">310000</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Activated accounts</div>
          <div className="stat-value">7</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Accounts pending Activation</div>
          <div className="stat-value">0</div>
        </div>
      </div>

      <div className="stats bg-primary text-primary-content mt-10">
        <div className="stat">
          <div className="stat-title">Unpayed loans</div>
          <div className="stat-value">KSH 100000</div>
          
        </div>

        <div className="stat">
          <div className="stat-title">USERS WITH LOANS </div>
          <div className="stat-value">4</div>
          <div className="stat-actions">
          </div>
        </div>
      </div>
    </Adminlayout>
  );
}
export default Adminstat;
