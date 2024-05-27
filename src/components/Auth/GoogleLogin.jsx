import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


export default function GoogleLogin() {
  const {signInWithGoogle} = useContext(AuthContext);
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
      >
        Google Login
      </button>
    </div>
  );
}
