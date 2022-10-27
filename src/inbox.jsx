import Layout from "./layout";

export default function Inbox() {
  return (
    <Layout>
      <div className="flex flex-col w-full lg:flex-row mt-48">
        <div className="grid flex-grow h-80 card bg-gray-500 rounded-box place-items-center">
          <div className="stack">
            <div className="card shadow-md bg-accent text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Guarantor Requests </h2>
                <label className="cursor-pointer label">
                  <span className="label-text">Name ID Amount </span>

                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                </label>
                <button className="btn btn-secondary">Accept Request</button>
              </div>
            </div>
            <div className="card shadow bg-accent text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 2</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow-sm bg-accent text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 3</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card  rounded-box place-items-center mt-20">
          
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn modal-button">
            open anouncements
          </label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" for="">
              <h3 className="text-lg font-bold">
                Hello SACCO USER!!
              </h3>
              <p className="py-4">
                Welcome to sacco anouncements here you will see latest updates on sacco occurence
              </p>
            </label>
          </label>
        </div>
      </div>
    </Layout>
  );
}
