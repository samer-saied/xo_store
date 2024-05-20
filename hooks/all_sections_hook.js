
import { GetAllSections } from '@/repository/sections_repository';
import { useState, useEffect, useRef } from 'react';

const useGetSections = () => {
  const [sections, setSections] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const isGetData = useRef(false)

  useEffect(() => {
    if (!isGetData.current) {
      GetAllSections()
        .then((sectionsData) => {
          setSections(sectionsData);
          setIsLoading(false); // Set loading state to false after fetch (success or error)

        })
        .catch((error) => {
          console.error('Error fetching sections:', error);
          setError(error);           // Store error for handling
          setIsLoading(false); // Set loading state to false after fetch (success or error)
        })

      isGetData.current = true
    }

  }, []);

  return { sections, isLoading, error }; // Return all relevant data
};

export default useGetSections;