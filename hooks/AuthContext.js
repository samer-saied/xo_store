"use client"
import { auth } from '@/db/firebase_init';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    currentUser: null,
    setCurrentUser: (currentUser) => { },
    loading: true,
    setLoading: (loading) => { },
});


export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setCurrentUser(currentUser); // Update your user state
                setLoading(false); // Update your loading state
            } else {
                setCurrentUser(null); // Or set a default state for logged-out users
                setLoading(false);
                // router.push("/login")
                // Or handle loading state appropriately
            }
        });

        return unsubscribe; // Clean up listener on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);