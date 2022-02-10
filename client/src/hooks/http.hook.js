import { useCallback, useState } from "react";



export function useHttp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        
        setIsLoading(true);
        
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }
        
            const response = await fetch(url, {method, body, headers});
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error');
            }
            
            setIsLoading(false);

            return data;
        } catch (e) {
            setIsLoading(false);
            setError(e);
            throw e;
        }
    }, []);
    
    function clearError() {
        setError(null);
    }

    return {isLoading, request, error, clearError};
}