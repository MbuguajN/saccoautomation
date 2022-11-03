import Layout from "./layout";

export default function Inbox() {
  return (
    <Layout>
      <div className="flex flex-col w-full mt-20">
        <div className="grid h-64 card  rounded-box place-items-center font-bold">
          GUARANTOR REQUESTS
          <div className="stack">
            <div className="card shadow-md bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title"> REQUEST </h2>
                <label className="label cursor-pointer">
                  <span className="label-text">Name IdNumber Amount</span>
                  <input
                    type="checkbox"
                    checked
                    className="checkbox checkbox-secondary"
                  />
                </label>
                <button className="btn btn-secondary w-20 content-around">
                  ACCEPT
                </button>
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
        <div className="grid h-48 card  rounded-box place-items-center">
          SACCO ANOUNCEMENTS
          <div className="stack">
            <div className="card shadow-md bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 1</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 2</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 3</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </Layout>
  );
}
