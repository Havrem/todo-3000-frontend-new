import { createContext, useEffect, useState } from "react";
import type { AuthContextType } from "../types/auth";
import type { ReactNode } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { auth } from "../services/firebaseService";

export const AuthContext = createContext<AuthContextType | undefined>(undefined); //Creates an empty box that contained AuthContextType or undefined. It will be undefined if authcontext is called outside of an authprovider, as it is the authprovider that sets the value for the authcontext in its return.

export const AuthProvider = ({children}:{children: ReactNode}) => { //Components that are wrapped in this will have access to all the properties and functions.
    const [user, setUser] = useState<User|null>(null);
    const [initializing, setInitializing] = useState(true);
    const [loggingIn, setLoggingIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser); //Is set to null if user logs out.
            setInitializing(false);
        });
        return unsubscribe; //Cleanup function that is called on unmount of component, this one  
    }, []);

    const login = async (email:string, password: string) => {
        setLoggingIn(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.warn("Login failed", error);
            throw error;
        } finally {
            setLoggingIn(false);
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    const authContextValue = { //The object given to callers calling useContext(AuthContext) inside the authcontext provider tree.
        user,
        initializing,
        loggingIn,
        login,
        logout
    }
    
    return ( //The children can contact the context via useContext, and when they do they are given the authContextValue object.
        <AuthContext.Provider value={authContextValue}> 
            {children} 
        </AuthContext.Provider>
    );
}