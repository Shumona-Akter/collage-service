import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const authContext = createContext(null)

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider =({children})=> {
        const [user, setUser] = useState(null)
        const [authError, setAuthError] = useState('')
        const [loading, setLoading] = useState(true);

        // sign in google
        const signInGoogle = () => {
                setLoading(true)
                return signInWithPopup(auth, provider)

        }

        // singup
        const signUp = (email, password) => {
                // setLoading(true)
                return createUserWithEmailAndPassword(auth, email, password)
        }

        // const signIn
        const signIn = (email, password) => {
                setLoading(true)

                return signInWithEmailAndPassword(auth, email, password)
        }

        // observer
        useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, loggedInUser => {
                        setUser(loggedInUser);
                        setLoading(false)
                       
                });
               
                return () => {
                        unSubscribe();
                };
        }, []);
        const updateUserProfile = (name, photo) => {
                return updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                });
            }
        // logout
        const logOut = () => {
                return signOut(auth)

        }
        const AuthInfo = {
                user,
                updateUserProfile,
                setUser,
                signInGoogle,
                authError,
                setAuthError,
                signUp,
                signIn,
                logOut,
                loading
        }
        return (
                <authContext.Provider value={AuthInfo}>
                        {children}
                </authContext.Provider>
        );
};

export default AuthProvider;