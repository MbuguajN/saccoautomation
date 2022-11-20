import Adminlayout from "./adminlayout";

export default function Monitor() {
  return (
    <Adminlayout>
      <div>
        <table className="table w-full mt-16 ">
          <thead>
            <tr>
              <th></th>
              <th>username</th>
              <th>Id Number</th>
              <th>transactionId</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tfoot></tfoot>
        </table>
        <button className="btn btn-info">Download Transation pdf</button>
      </div>
    </Adminlayout>
  );
}
