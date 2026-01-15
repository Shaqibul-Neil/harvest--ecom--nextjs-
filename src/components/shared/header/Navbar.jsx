import { getServerSession } from "next-auth";
import MainHeader from "./MainHeader";
import { authOptions } from "@/lib/authOptions";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  //console.log(session);
  return <MainHeader session={session} />;
};

export default Navbar;
