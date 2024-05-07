
import { auth } from "@/db/firebase_init";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";

const useAuthHook = () => {

    const [currentUser, setcurrentUser] = useState(null);
    const fetchDataRef = useRef(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setcurrentUser(user);
            } else {
                setcurrentUser(null);
            }
        });
        fetchDataRef.current = true;
    }, []);

    return [currentUser];

}

export default useAuthHook;


