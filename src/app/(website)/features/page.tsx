import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe2,
  Type,
  Sparkles,
  Play,
  Users,
  Zap,
  Lock,
  BarChart2,
  Clock,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Powerful Features for Content Creators
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover how AI StreamCraft revolutionizes your content
                  creation process with cutting-edge AI technology.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Globe2 className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Multilingual AI Captions</CardTitle>
                  <CardDescription>
                    Generate accurate captions in multiple languages instantly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Expand your global reach with AI-powered captions in various
                  languages, making your content accessible to a wider audience.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Type className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>AI Title & Description Generator</CardTitle>
                  <CardDescription>
                    Create engaging titles and descriptions automatically.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Save time and boost engagement with AI-generated titles and
                  descriptions that capture the essence of your content.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Video className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Live Stream Uploads</CardTitle>
                  <CardDescription>
                    Upload and process your live streams with ease.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Seamlessly upload your live streams and transform them into
                  polished, shareable content with our advanced processing
                  tools.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Play className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Screen & Webcam Recording</CardTitle>
                  <CardDescription>
                    Capture your screen, webcam, or both simultaneously.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Create professional-quality videos with our intuitive
                  recording tools, perfect for tutorials, presentations, and
                  more.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Team Collaboration</CardTitle>
                  <CardDescription>
                    Work together seamlessly with your team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Share projects, provide feedback, and collaborate effectively
                  with team members to create outstanding content.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Instant Sharing</CardTitle>
                  <CardDescription>
                    Share your videos with a single click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Generate shareable links instantly and distribute your content
                  across various platforms with ease.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Advanced Security</CardTitle>
                  <CardDescription>
                    Keep your content safe and secure.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Protect your videos with password protection, domain
                  restrictions, and end-to-end encryption.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart2 className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Detailed Analytics</CardTitle>
                  <CardDescription>
                    Gain insights into your content's performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Track views, engagement, and audience demographics with our
                  comprehensive analytics /auth/sign-in.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Custom Video Player</CardTitle>
                  <CardDescription>
                    Enhance viewer experience with our feature-rich player.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Offer viewers playback speed control, chapter navigation, and
                  interactive elements for an engaging experience.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Elevate Your Content?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of content creators who are already using AI
                  StreamCraft to transform their video content.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started for Free</Button>
                <Button variant="outline">View Pricing</Button>
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
