
import axios from "axios";
import Cookies from 'universal-cookie';


export default async function loginAction(email:string , password:string){
    const link = process.env.NEXT_PUBLIC_LARAVEL_BACKEND_URL 
  try {
    const response = await axios.post(`${link}/login`, {
        email,
        password,
    });

    if (response.status === 200) {
        const cookies = new Cookies();
        const token = response.data.token;
        const user = response.data.user;

        cookies.set('Authorization', token);
        cookies.set('userRole', user.role);
        return user ; // Return role
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