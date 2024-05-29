
import { GetCategoriesBySections } from '@/repository/category_repository';
import { useState, useEffect, useRef } from 'react';

const useGetOneSection = (id) => {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const isGetData = useRef(false)

  useEffect(() => {
    if (!isGetData.current) {
  
      GetCategoriesBySections(id)
        .then((categoriesData) => {
          setCategories(categoriesData);
        })
        .catch((error) => {
          console.error('Error fetching sections:', error);
          setError(error); // Store error for handling
        })
        .finally(() => {
          setIsLoading(false); // Set loading state to false after fetch (success or error)
        });

      isGetData.current = true
    }

  }, []);

  return { categories, isLoading, error }; // Return all relevant data
};

export default useGetOneSection;