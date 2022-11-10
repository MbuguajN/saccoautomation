import { useState } from "react";

function Profile(props) {
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editHomeAddress, setEditHomeAddress] = useState(false);

  return (
    <div className="my-10 justify-self-start card bg-base-100 shadow-xl">
      <div className="avatar my-1 mx-auto">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title justify-center">User Profile</h2>

        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              User Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                {!editUsername && (
                  <dd
                    onClick={() => {
                      setEditUsername((state) => !state);
                    }}
                    className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                  >
                    {props.data.username}
                  </dd>
                )}
                {editUsername && (
                  <>
                    <label className="label">
                      <span
                        onClick={() => {
                          setEditUsername((state) => !state);
                        }}
                        className="label-text"
                      >
                        username?
                      </span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="New Name"
                        className="input  w-36"
                      />
                    </label>
                  </>
                )}
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email Address
                </dt>

                {!editEmail && (
                  <dd
                    onClick={() => setEditEmail((state) => !state)}
                    className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                  >
                    {props.data.email}
                  </dd>
                )}
                {editEmail&& (

                  <>
                  <label className="label">

                    <span
                    onClick={() =>{
                      setEditEmail((state) =>!state);

                    }}
                    className="lablel-text"
                    >
                      email???

                    </span>

                  </label> 
                  <label className="input-group">
                    <input
                    type="text"
                    placeholder="new email"
                    className="input w-36"
                    />
                  </label>
                  </>
                    
                )}
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Home Address
                </dt>
                {
                }
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {props.data.HomeAddress}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Work Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {props.data.WorkAddress}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Mobile Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {props.data.MobileNumber}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">ID Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {props.data.Balance}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="card-actions justify-center m-1">
          <button className="btn btn-primary">Update Info</button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
