import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import app from "../../firebase/firebase.config"

export const AuthContext= createContext(null)

const auth = getAuth(app)
export default function AuthProvider({children}) {
    const [user,setUser] = useState(null)
    const [loader,setLoader]=useState(true)
    const registerUsre =(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const logInEmailAndPass=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sinup with google
    const googleSingUp = (provider)=>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }
    // logout
    const logOut =()=>{
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
             console.log(currentUser,'current user')
             setUser(currentUser)
             setLoader(false)
         })
         return ()=>{
             unSubscribe();
         }
     },[])
     const authInfo = {user,registerUsre,loader,logInEmailAndPass,logOut,googleSingUp}

  return (
    <div>
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    </div>
  )
}

