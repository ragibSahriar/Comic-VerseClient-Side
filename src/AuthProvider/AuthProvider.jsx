import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();
import app from './../Firebase/firebase.config';


    const auth = getAuth(app);
    const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);  
      const [loading, setLoading] = useState(true);
    
      const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
      }
    
      const signIn = (email, password) => {
        setLoading(true);
            return signInWithEmailAndPassword(auth,email, password);  
      }

      const logOut=()=>{
        return signOut(auth)
       }
    
      useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          setLoading(false);
          
        });
        return () => {
          return unsubscribe();
        } 
      },[])
    
      const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
      }; 


    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;