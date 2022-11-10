import { useEffect } from "react";
import { useState } from "react";
import Layout from "./layout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router'
function UpdateSavingsPage() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState();
  const [previousBalance,setPreviousBalance] = useState(0);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    
    console.log(typeof userData?.Balance)
    console.log(typeof data.balance )
    fetch("http://localhost:3002/update-balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: sessionStorage.getItem("auth"),
        balance: data.balance + userData?.Balance,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          navigate(0)
        }
      });
  };
  const getUserData = () => {
    fetch("http://localhost:3002/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        token: sessionStorage.getItem("auth"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result[0]);
        setUserData(data.result[0]);
        setPreviousBalance(data.result[0].balance)
      });
  };
  useEffect(() => {
    getUserData();
  }, []);

  if (userData) {
    console.log(userData);
  }
  
  return (
    <Layout>
      <div className="stats my-32 bg-secondary text-primary-content">
        <div className="stat">
          <div className="stat-title">Balance</div>
          <div className="stat-value">KSH {userData?.Balance}</div>
          <div className="stat-actions"></div>
        </div>

        <div className="stat">
          <div className="stat-title">dividents</div>
          <div className="stat-value">KSH {(userData?.Balance * 10) / 100}</div>
          <div className="stat-actions"></div>
        </div>
      </div>
      <form className="form-control" onSubmit={handleSubmit(onsubmit)}>
        <label className="label">
          <span className="label-text">Enter amount to add</span>
          <span className="label-text-alt text-error">
            {errors.balance && <span>This field is required</span>}
          </span>
        </label>
        <label className="input-group mx-auto">
          <span>Amount</span>

          <input
            type="number"
            placeholder="enter amount here"
            className="input input-bordered"
            {...register("balance", { required: true, valueAsNumber: true })}
          />

          <span>KES</span>
        </label>
        <button
          type="submit"
          className="btn btn-outline btn-primary mt-10 w-20 mx-36"
        >
          submit
        </button>
      </form>
    </Layout>
  );
}
export default UpdateSavingsPage;
