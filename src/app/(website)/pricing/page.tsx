import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simple, Transparent Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Choose the plan that's right for you. Start for free and
                  upgrade as you grow.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Free Plan</CardTitle>
                  <CardDescription>Perfect for getting started</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold">$0</div>
                  <ul className="grid gap-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Max 5 minutes per video</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>720p streaming quality</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>AI-generated captions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic title suggestions</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-destructive" />
                      <span className="text-gray-500">
                        Collaborator accounts
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro Plan</CardTitle>
                  <CardDescription>For power users and teams</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold">$29</div>
                  <ul className="grid gap-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited video length</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 4K streaming quality</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced AI-generated captions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>AI-powered title and description generation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Upgrade to Pro</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have more questions? Don't hesitate to reach out to our
                  support team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Can I upgrade or downgrade my plan at any time?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We accept all major credit cards and PayPal for payment.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Is there a limit to how many videos I can upload?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  There's no limit to the number of videos you can upload on
                  either plan. The Free plan has a 5-minute limit per video,
                  while the Pro plan allows unlimited video length.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  How accurate are the AI-generated captions?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI-generated captions are highly accurate, typically
                  achieving over 95% accuracy. The Pro plan offers even more
                  advanced caption generation for improved accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 AI StreamCraft. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
