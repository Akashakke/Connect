import * as AuthApi from '../api/AuthRequest'
import { toast } from 'react-toastify';


export const logIn=(formData)=> async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try {
        const {data}= await AuthApi.logIn(formData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(error)
        dispatch({type:"AUTH_FAIL"})
        toast.error(error.message, {
            position: "bottom-center",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            });
    }
    
}


export const signUp=(formData)=> async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try {
        const {data}= await AuthApi.signUp(formData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(error)
        dispatch({type:"AUTH_FAIL"})
    }
    
}

export const logout =()=>async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
}