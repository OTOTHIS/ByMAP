import  { NextRequest , NextResponse } from 'next/server';


export function middleware(request: NextRequest) {

 const token = request.cookies.get("Authorization")?.value;
const role = request.cookies.get("userRole")?.value;
const path = request.nextUrl.pathname;
// const url = request.nextUrl.clone();
console.log(request.nextUrl.pathname);

// if(role){
//   axiosClient.get('/'+role).then(res => res.status !== 200 ?
//      NextResponse.redirect(new URL("/login", request.url)) 
//   : console.log(res.status))
// }

  // If trying to access login or register page and user is authenticated, redirect to home page
  if (token && (path.startsWith('/register') ||  path.startsWith('/login'))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If trying to access any other page and user is not authenticated, redirect to login page
  if (!token && !path.startsWith('/register') && !path.startsWith('/login')) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  
 // If token exists
 if (token) {
  if (role === "user" && !path.startsWith('/user') ) {
    return NextResponse.redirect(new URL("/user", request.url));
  }


}


  return NextResponse.next();



}

export const config = {
  matcher: ['/user/:path*','/register','/login'],
  api: {
    bodyParser: false // Disable bodyParser to access request.cookies
  }
}


  // // If currentUser exists and the requested path does not start with '/user', redirect to '/dashboard'
  // if (currentUser && request.nextUrl.pathname.startsWith('/user')) {
  //   return NextResponse.redirect('/user');
  // }

  // // If currentUser doesn't exist and the requested path is not '/login', redirect to '/login'
  // if (!currentUser && request.nextUrl.pathname !== '/user') {
  //   return NextResponse.redirect('/login');
  // }

  // // If currentUser doesn't exist and the requested path starts with '/user', redirect to '/hello'
  // if (!currentUser && request.nextUrl.pathname.startsWith('/')) {
  //   return NextResponse.redirect(new URL("/"));
  // }

  // return NextResponse.redirect(new URL("/"));