import { onAuthenticatedUser } from "@/actions/auth";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const auth = await onAuthenticatedUser();

  if (auth.user) return redirect(`/dashboard/${auth.user?.workspace[0].id}`);
  else return redirect("/auth/sign-in");
};

export default AuthCallbackPage;
