"use client";
export default function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_signin").showModal()}
      >
        SignIn
      </button>
      <dialog id="my_modal_signin" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-bold text-3xl ml-6 mb-3 text-primary">SignIn</h1>
          <h2 className="font-bold text-sm ml-6">Welcome back!</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
