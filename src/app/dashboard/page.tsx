import { onAuthenticatedUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

async function DashBoardPage() {
  const auth = await onAuthenticatedUser();

  if (auth.user) {
    redirect(`/dashboard/${auth.user.workspace[0].id}`);
  } else {
    redirect(`/auth/sign-in`);
  }

  return <div>DashBoardPage</div>;
}

export default DashBoardPage;
