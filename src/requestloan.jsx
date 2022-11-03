import Layout from "./layout";
import { useState } from "react";

export default function RequestLoan() {
  const [allowRequest, setAlLowRequest] = useState(false);
  return (
    <Layout>
      <div className="my-5 w-full">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Guarantor</th>
              <th>Id Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="stats bg-accent text-primary-content my-3">
        <div className="stat">
          <div className="stat-title">loan limit</div>
          <div className="stat-value">KSH 89,400</div>
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group">
            <span>Amount</span>
            <input
              type="text"
              placeholder="enter amount"
              className="input input-bordered text-black"
            />
            <span>ksh</span>
          </label>
          <div className="stat-actions ">
            <button className="btn btn-sm btn-success bg-rose-400">Request loan</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">loan balance</div>
          <div className="stat-value">KSH 0</div>
        </div>
      </div>
    </Layout>
  );
}
