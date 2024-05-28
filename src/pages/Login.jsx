import { GoogleAuthProvider } from 'firebase/auth';
import  { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Auth/AuthProvider';

const Login = () => {

const {user, loader,logInEmailAndPass,googleSingUp} = useContext(AuthContext)

const navigate=useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/'
const loginHandler=event=>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password)
  logInEmailAndPass(email,password)
}
// google signup 
const googleProvider = new GoogleAuthProvider()
const googleSingInHandl = ()=>{
  googleSingUp(googleProvider)
 
}

useEffect(() => {
  if (user) {
    navigate(from, { replace: true });
  }
}, [user, loader, navigate, from]);
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name ='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type='submit' className="btn btn-primary mb-5" value='Login'></input>
            <p className='text-center mb-3'>or</p>
            <button className="btn gap-2" onClick={googleSingInHandl}>
   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
   sign up with google
 </button>
        </div>
      </form>
      <p className='text-center mb-4'>New in website?pleace <Link to='/register' className='text-[#f64c72]'>Sign up</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;