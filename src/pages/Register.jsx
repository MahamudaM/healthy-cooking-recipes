
  
  import { Link, useNavigate } from "react-router-dom";
  import GoogleLogin from "../components/Auth/GoogleLogin";
  
  import { useContext, useEffect } from "react";
import { AuthContext } from "../components/Auth/AuthProvider";
  
  export default function Register() {
    const {creatUser,user} = useContext(AuthContext)

    // const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      creatUser(email, password)
      .then(result=>{console.log(result.user)})
      .catch(error=>{console.error(error)})
    };
  
    let from = location.state?.from?.pathname || "/";
  
   
    useEffect(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, [user, navigate, from]);
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-2 w-full mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className=" card shadow-2xl bg-base-100 max-w-lg">
            <form onSubmit={handleRegister} className="card-body  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
                <p className="text-center">
                  Already have an account ?{" "}
                  <Link to={"/login"} className="text-orange-500">
                    Login
                  </Link>
                </p>
              </div>
            </form>
            <div className="  w-full ">
              <div className="flex flex-col gap-2 mx-7 mb-7">
                <GoogleLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  