
import { GetAllSections } from "@/repository/sections_repository";
import { useEffect, useRef, useState } from "react";

const useGetSectionsHook = () => {

    const [sections, setsections] = useState(null);
    const fetchDataRef = useRef(false);

    useEffect(() => {
        if (!fetchDataRef.current) {
            GetAllSections().then((sections) => {
                setsections(sections);
            });
            fetchDataRef.current = true;
        }
    }, []);
    return [sections];

}

export default useGetSectionsHook;


