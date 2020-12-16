import Axios from "axios";
import { useEffect, useState } from "react";

export const useAxiosOnMount = (url) =>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);


    useEffect(()=>{
        Axios.get(url)
        .then((res)=>{
            setData(res.data);
            setError(null);
        })
        .catch((err)=>{
            setError(err.response);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [])

    return [data, loading, error];
    // return { loading, error, data};
}

// //demo using array ~ order matters names dont
// const [a, b , c] = useAxiosOnMount('/api/asdf')

// //demo using obj~ order doesnt matter names matter
// const {error:az, data:bd, loading:cd} = useAxiosOnMount('/api/asdf')