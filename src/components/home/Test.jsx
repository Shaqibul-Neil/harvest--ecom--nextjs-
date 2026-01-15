"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Test = () => {
  const session = useSession();
  return (
    <div>
      <p>client {JSON.stringify(session)}</p>
    </div>
  );
};

export default Test;
