import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const createUser=(email,password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password)
}

const data={
    createUser,
    user,

}


  return <AuthContext.Provider value={data}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
