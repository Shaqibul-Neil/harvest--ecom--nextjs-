import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
//user private routes
const privateRoutes = ["/dashboard"];
//admin routes
const adminRoutes = ["/dashboard/admin/add-products"];
//seller routes
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  //get the token from req
  const token = await getToken({ req });
  //get the user's desired path
  const reqPath = req.nextUrl.pathname;
  //checking if the user is authenticated
  const isAuthenticated = Boolean(token);
  //getting the user role
  const isUser = token?.role === "user";
  const isAdmin = token?.role === "admin";
  //check if the desired path is private or not
  const isPrivateRoute = privateRoutes.some((route) =>
    reqPath.startsWith(route),
  );
  const isAdminRoute = adminRoutes.some((route) => reqPath.startsWith(route));
  //   console.log({ isAuthenticated, isUser, reqPath, isPrivate });

  //Logic for private route only
  if (!isAuthenticated && isPrivateRoute) {
    //re-route to login
    const loginUrl = new URL("/login", req.url);
    //reroute to his desired path
    loginUrl.searchParams.set("callbackUrl", reqPath);
    return NextResponse.redirect(loginUrl);
  }
  //logic for admin route
  if (isAuthenticated && !isAdmin && isAdminRoute) {
    return NextResponse.rewrite(new URL("/forbidden", req.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard/admin/:path*"],
};
