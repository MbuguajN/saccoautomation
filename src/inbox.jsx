import Layout from "./layout";

export default function Inbox() {
  return (
    <Layout>
      <div className="flex flex-col w-full mt-8">
        <div className="grid h-64 card  rounded-box place-items-center font-bold">
          GUARANTOR REQUESTS
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Request!</h2>
              <p>Username IDNUMBER AMOUNT .</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-secondary">Deny</button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-max card  rounded-box place-items-center mt-10">
          SACCO ANOUNCEMENTS
          <div className="card card-side bg-base-100 shadow-xl mt-4">
            <figure>
              <img src="http://placeimg.com/300/300/nature" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New Anouncement!</h2>
              <p>Anouncement displayed here.</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
