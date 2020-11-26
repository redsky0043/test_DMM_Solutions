import { useState, useEffect } from 'react';

export const usePhotos = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPhotos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://tzfrontend.herokuapp.com/images/');
                const results = await response.json();
                // if (error) {
                //     throw new Error(error);
                // }
                setData(results);
                setIsError(false);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getPhotos();
    }, []);

    return {
        data,
        isLoading,
        isError,
    };
};