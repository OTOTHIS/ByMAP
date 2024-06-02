
import axios from "axios";
import Cookies from 'universal-cookie';

export type registerForm = {
    name:string,
    email:string,
    password:string,
    password_confirmation:string

}
export default async function registerAction(values:registerForm){
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/register", values);

    if (response.status === 200) {
        const cookies = new Cookies();
        const token = response.data.token;
        const role = response.data.user.role;

        cookies.set('Authorization', token);
        cookies.set('userRole', role);
        return role ; // Return role
    } else {
        throw new Error(response.data.error); // Throw error
    }
} catch (error) {
    console.error("Error during login:", error);
    throw error; // Throw error
}


    // try {
    //   // Send data to API endpoint
    //   const response = await axios.post("http://127.0.0.1:8000/api/login", {
    //     email,
    //     password,
    //   });
  
    //   if (response.status === 200) {
    //     const cookies = new Cookies();
    //     const router = useRouter() ;
    //     console.log(response);
    //     const token = response.data.token
    //     const role = response.data.user.role
   
    //      cookies.set('Authorization',token);
    //      cookies.set('userRole',role);

    //     console.log(role)
    //      switch (role) {
    //       case "owner":
    //         router.push("/")
    //         break;
    //         case "user":
    //           router.push("/user")
    //           break;
    //       default:router.replace("/")
    //         break;
    //      }



    //   } else {
    //     return response.data.error; // Return error message
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   return error; // Return a generic error message
    // }
  }