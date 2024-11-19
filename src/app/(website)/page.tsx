import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe2, Play, Type, Upload } from "lucide-react";
import Link from "next/link";

export default function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Content Creation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Upload live streams, get AI-generated captions in multiple
                  languages, and create engaging titles and descriptions
                  effortlessly.
                </p>
              </div>
              <div className="space-y-7 space-x-4">
                <Link href={"/auth/sign-in"}>
                  <Button>Get Started</Button>
                </Link>
                <Link href={"/features"}>
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Upload className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Live Stream Uploads</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily upload your live streams and transform them into
                  engaging content.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Globe2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Multilingual AI Captions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Generate accurate captions in multiple languages using
                  advanced AI technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Type className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">
                  AI-Powered Titles & Descriptions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create compelling titles and descriptions automatically with
                  our AI engine.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience the Future of Content Creation
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform streamlines your workflow, enhances
                  accessibility, and helps you reach a global audience
                  effortlessly.
                </p>
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Start Your Free Trial
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground rounded-full blur-2xl opacity-50" />
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                    <div className="p-4">
                      <div className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                        <Play className="h-12 w-12 text-primary" />
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-4 bg-gray-800 rounded w-3/4" />
                        <div className="h-4 bg-gray-800 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Content?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of content creators who are already using AI
                  StreamCraft to elevate their live streams.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
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
