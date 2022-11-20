import Adminlayout from "./adminlayout";

export default function Loanrequest() {
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
              <th>Amount</th>
            </tr>
          </thead>
          <tbody></tbody>
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
