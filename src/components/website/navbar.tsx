import { Sparkles, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <header className="px-2 sm:px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Sparkles className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg sm:text-2xl font-bold">
          AI StreamCraft
        </span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
          href="/features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
          href="/pricing"
        >
          Pricing
        </Link>

        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/auth/sign-in"
        >
          <Button>Login</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
