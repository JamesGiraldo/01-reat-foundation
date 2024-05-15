import { create } from "zustand";

interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token?: string;
    user?: User;

    login: (email: string, passowrd: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

export const useAuthStore = create<AuthState>()((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {
        set({
            status: 'authenticated',
            token: 'ABC123',
            user: {
                name: 'James Giraldo',
                email: email
            }
        })
    },

    logout: () => {
        set({
            status: 'not-authenticated',
            token: undefined,
            user: undefined
        })
    }
}))