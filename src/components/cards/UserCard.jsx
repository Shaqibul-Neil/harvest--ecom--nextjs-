"use client";
import { useSession } from "next-auth/react";
import React from "react";

const UserCard = () => {
  const session = useSession();
  //console.log(session);
  return (
    <div>
      <h3>{JSON.stringify(session)}</h3>
    </div>
  );
};

export default UserCard;
