import { useContext } from "react";
import type { AuthContextType } from "../types/auth";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth can only be used by components nested within an AuthProvider")
    }
    return context;
}