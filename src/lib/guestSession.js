/* ====================================================================
   DISABLED: GUEST SESSION (Daraz Style - No Guest Cart)
   This file is kept for reference or future use if needed.
   ==================================================================== */

// import { cookies } from "next/headers";
// import { v4 as uuidv4 } from "uuid";

// export const getGuestId = async () => {
//   //get the cookies
//   const cookieStore = await cookies();
//   //get the guest id, it would be null if there is no guest id
//   let guestId = cookieStore.get("guestId")?.value;
//   //if no guest id then create one
//   if (!guestId) {
//     guestId = uuidv4();
//     //setting the cookies from server
//     cookieStore.set("guestId", guestId, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 60 * 60 * 24 * 30, //cookies will stay for 30 days
//       path: "/",
//     });
//   }
//   return guestId;
// };

/** Previous Explanation (for reference):
 * httpOnly: true ---> this means client side js(browser) cant access this only server side can access this
 * path: "/" ---> cookies is valid to all the url of the site
 * secure: process.env.NODE_ENV === "production" ---> only send over HTTPS in production
 */
