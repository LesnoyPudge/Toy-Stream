import { useNavigate } from 'react-router-dom';


export function useNextPage() {
    let navigate = useNavigate();
    
    function handleNavigate(to: string) {
        navigate(to)
    }

    return {handleNavigate};
}