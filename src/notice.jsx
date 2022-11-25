import Adminlayout from "./adminlayout";

export default function Notice() {
  return (
    <Adminlayout>
      <div className="card w-96 bg-base-100 shadow-xl mt-10 mx-36">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Send Users Notices</h2>
          <textarea
            className="textarea textarea-success"
            placeholder="Bio"
          ></textarea>
          <div className="card-actions">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
}
