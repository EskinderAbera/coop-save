import { useState } from "react";
import { motion } from "framer-motion";
import {
  PiggyBank,
  DollarSign,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  Menu,
  Star,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function SavingsChallengeLanding() {
  const [savingsPercentage, setSavingsPercentage] = useState(10);

  // This would typically come from your data source
  const totalExpenses = 3005;

  const potentialSavings = (totalExpenses * savingsPercentage) / 100;
  const monthsToSave = [3, 6, 12];

  const handleSliderChange = (value: number[]) => {
    setSavingsPercentage(value[0]);
  };

  const features = [
    {
      title: "Smart Expense Tracking",
      description:
        "Automatically categorize and track your expenses with AI-powered insights.",
    },
    {
      title: "Personalized Savings Goals",
      description:
        "Set and achieve your financial goals with customized savings plans.",
    },
    {
      title: "Progress Visualization",
      description:
        "See your savings grow with beautiful, interactive charts and projections.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Small Business Owner",
      content:
        "This savings challenge helped me save enough to expand my business in just 6 months!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Miller",
      role: "Freelance Designer",
      content:
        "I never thought I could save so much. The percentage slider made it easy to find a comfortable amount.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "The visual projections motivated me to stick with my savings plan. I've saved over $5,000!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 px-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <PiggyBank className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SaveSmart</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  <a
                    href="#features"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    How It Works
                  </a>
                  <a
                    href="#testimonials"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Testimonials
                  </a>
                  {/* <Button className="mt-4">Sign Up Free</Button> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10" />
          <div className="container py-20 md:py-32 px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Save More With Our{" "}
                  <span className="text-primary">Smart Challenge</span>
                </motion.h1>
                <motion.p
                  className="text-xl text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Set a personalized savings goal based on your expenses and
                  watch your money grow. Start your financial journey today.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button size="lg" className="gap-2">
                    Start Saving Now
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-xl shadow-xl overflow-hidden border"
              >
                <div className="p-6 bg-primary/5 border-b">
                  <h2 className="text-2xl font-bold">Savings Challenge</h2>
                  <p className="text-muted-foreground">
                    See how much you could save
                  </p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Total Expense Amount */}
                  <motion.div
                    className="flex items-center justify-between p-5 bg-muted rounded-lg"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Total Monthly Expenses
                        </p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold">${totalExpenses}</p>
                  </motion.div>

                  {/* Savings Percentage Slider */}
                  <div className="space-y-4 pt-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Set savings percentage</h3>
                      <span className="font-bold text-lg text-primary">
                        {savingsPercentage}%
                      </span>
                    </div>

                    <Slider
                      defaultValue={[10]}
                      max={15}
                      step={1}
                      onValueChange={handleSliderChange}
                      className="py-4"
                    />

                    <motion.div
                      className="flex items-center justify-between p-4 bg-primary/10 rounded-lg"
                      animate={{
                        scale: [1, 1.02, 1],
                        backgroundColor: [
                          "rgba(147, 51, 234, 0.1)",
                          "rgba(147, 51, 234, 0.2)",
                          "rgba(147, 51, 234, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <PiggyBank className="h-6 w-6 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Monthly Savings
                          </p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold">
                        ${potentialSavings.toFixed(2)}
                      </p>
                    </motion.div>
                  </div>

                  {/* Savings Projections */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">Potential Savings</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {monthsToSave.map((month) => (
                        <motion.div
                          key={month}
                          className="p-3 bg-secondary/10 rounded-lg text-center"
                          whileHover={{
                            y: -5,
                            backgroundColor: "rgba(147, 51, 234, 0.15)",
                          }}
                        >
                          <p className="text-sm text-muted-foreground">
                            {month} months
                          </p>
                          <p className="text-lg font-bold">
                            ${(potentialSavings * month).toFixed(0)}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">Start Your Challenge</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30 px-10">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Smart Features for Smart Savers
              </h2>
              <p className="text-xl text-muted-foreground">
                Our platform is designed to make saving money effortless and
                rewarding.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-card rounded-xl p-6 shadow-sm border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-10">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
              <p className="text-xl text-muted-foreground">
                Three simple steps to financial freedom
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -z-10 transform -translate-y-1/2" />

              {[
                {
                  step: "1",
                  title: "Connect Your Accounts",
                  description:
                    "Securely link your bank accounts to automatically track your expenses.",
                },
                {
                  step: "2",
                  title: "Set Your Savings Goal",
                  description:
                    "Use our interactive slider to choose a comfortable savings percentage.",
                },
                {
                  step: "3",
                  title: "Watch Your Savings Grow",
                  description:
                    "Track your progress and see your savings grow month after month.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-xl p-6 shadow-sm border h-full">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-muted/30 px-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                What Our Users Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of happy savers who have transformed their
                financial future
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-card rounded-xl p-6 shadow-sm border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="p-8 md:p-12 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Ready to Start Saving?
                    </h2>
                    <p className="text-xl opacity-90">
                      Join thousands of users who are building their financial
                      future with our savings challenge.
                    </p>
                    <Button size="lg" variant="secondary" className="gap-2">
                      Get Started Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="hidden md:block relative h-full min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PiggyBank className="h-32 w-32 text-primary-foreground/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-auto">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <PiggyBank className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">SaveSmart</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Helping you save smarter, not harder.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 SaveSmart. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
