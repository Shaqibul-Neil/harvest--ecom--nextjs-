import UserCard from "@/components/cards/UserCard";
import MainHeadings from "@/components/shared/headings/MainHeadings";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <MainHeadings>
        Home
        <UserCard />
        {JSON.stringify(session)}
      </MainHeadings>
    </div>
  );
}
