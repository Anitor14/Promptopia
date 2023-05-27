"use client";

import { SessionProvider } from "next-auth/react";

//this provides the session data to all the children.
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
