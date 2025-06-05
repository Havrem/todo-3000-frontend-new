import type { User } from "firebase/auth";

export interface AuthContextType{
    user: User | null;
    initializing: boolean;
    loggingIn: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}