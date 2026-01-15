import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export const getGuestId = async () => {
  //get the cookies
  const cookieStore = await cookies();
  //console.log("cookieStore", cookieStore);
  //get the guest id, it would be null if there is no guest id
  let guestId = cookieStore.get("guestId")?.value;
  //if no guest id then create one
  if (!guestId) {
    guestId = uuidv4();
    console.log(guestId);
    //setting the cookies from server
    cookieStore.set("guestId", guestId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, //cookies will stay for 30 days
      path: "/",
    });
  }
  return guestId
};
/** Explanation
 * httpOnly: true---> this means client side js(browser) cant access this only server side can access this and only with server side request cookie can be read or updated. also it is the safe way to prevent XSS attack when cookies get stolen
 * path: "/", //cookies is valid to all the url of the site. for any particular url set '/cart' then cookie will be valid tto only this url
 * secure: process.env.NODE_ENV === "production" কেন লেখা হয়? এটি একটি সিকিউরিটি বেস্ট প্র্যাকটিস। এর মানে হলো: লোকালহোস্টে (Development): সেখানে secure হবে false (যেহেতু ভ্যালু "production" নয়)। ফলে আপনার লোকাল পিসিতে HTTP-তেও কুকিটি ঠিকমতো কাজ করবে।
লাইভ সাইটে (Production): সেখানে secure হয়ে যাবে true। এর ফলে কুকিটি শুধুমাত্র HTTPS (Secure connection) থাকলে কাজ করবে। অর্থাৎ হ্যাকাররা সহজে কুকি চুরি করতে পারবে না। আপনি যখন npm run dev দিয়ে প্রজেক্ট রান করেন, Next.js অটোমেটিক এই ভ্যালুটিকে "development" সেট করে দেয়।
আর যখন আপনি প্রজেক্ট বিল্ড করে লাইভ সার্ভারে বা Vercel-এ হোস্ট করেন, তখন এটি অটোমেটিক "production" হয়ে যায়।
 */
