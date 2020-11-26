import { useState, useEffect } from 'react';

export const usePhotos = () => {
    const [data, setData] = useState([]);
    const [dataNext, setDataNext] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [id, setId] = useState(1);

    useEffect(() => {
        const getPhotos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://tzfrontend.herokuapp.com/images/');
                const responseNext = await fetch(`https://tzfrontend.herokuapp.com/images/${setId}/`);
                const results = await response.json();
                const resultsNext = await responseNext.json();
                // if (error) {
                //     throw new Error(error);
                // }
                setData(results);
                setDataNext(responseNext);
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
        dataNext,
        isLoading,
        isError,
    };
};