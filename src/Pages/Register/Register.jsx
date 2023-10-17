import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero my-10">
      <div className="hero-content ">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="text-center ">
        <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email" name="email"
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
                placeholder="Password" name="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Already you have an account? Please 
             <Link
              className="font-semibold text-amber-500 transition-colors hover:text-blue-700"
              to="/login"
            >
              Login
            </Link>
          </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;