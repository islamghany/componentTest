import React , {useEffect,useState} from 'react';
import apiCall from './apiCall';

const useFetch = (url)=>{
    const [response , setResponse] = useState(null);
    const [error,setError] = useState(null);
    useEffect(()=>{
         const fetchData= async () =>{
         	try{
         		const res = await apiCall.get(url);
         		setResponse(res);
         	} catch(err){
         		setError(error);
         	}
         }
         fetchData();
    },[]);

    return {response,error}
}
export default useFetch;