'use client'
import { axiosClient } from "@/components/axios/axios";
import { useEffect } from "react";
import Page404 from "../../not-found";

const UserFacture = ()  =>{
const fetchOrder  = async() =>{
try {
    const response = await axiosClient.get('/user/order/2')
    console.log(response.data)
    if(response.status == 401 || response.status == 404){
        console.log("auth")
        Page404();
    } 
} catch (error) {
    console.log(error)
}
}
    useEffect(() => {
        fetchOrder()
      
    }, []);
return (
    <h1>Hwllo world</h1>
)
}

export default UserFacture