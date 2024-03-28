import React from 'react'
import { useState,useEffect } from 'react'
const useFetch = (url) => {
    const [data,setData] =useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);



    useEffect(() =>{
        const fetchData = async() =>{
            setLoading(true);
            try {
                const response = await fetch(url);
                if(response.ok) {
                    const data = await response.json();
                    setData(data)
                }
            } catch (error) {
                console.log(error)
                setError(error.message)
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[url])
  return 
        {data,error,loading}
    
  
}

export default useFetch
