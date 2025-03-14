"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  Rocket,
  Shield,
  ArrowRight,
  PiggyBank,
  TrendingUp,
  BarChart4,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PackageSelectionProps {
  savingsPercentage: number;
  monthlyExpenses: number;
  onSelectPackage: (packageName: string) => void;
}

export default function PackageSelection({
  savingsPercentage = 15,
  monthlyExpenses = 3005,
  onSelectPackage = () => {},
}: PackageSelectionProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const monthlySavings = (monthlyExpenses * savingsPercentage) / 100;

  const packages = [
    {
      id: "basic",
      name: "Basic Saver",
      description: "Perfect for beginners starting their savings journey",
      icon: PiggyBank,
      color: "bg-blue-500",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        "Basic savings tracking",
        "Monthly savings reports",
        "Single savings goal",
        "Email support",
      ],
      notIncluded: [
        "Advanced analytics",
        "Financial advisor access",
        "Multiple savings goals",
        "Personalized strategies",
      ],
      recommended: false,
    },
    {
      id: "plus",
      name: "Smart Saver Plus",
      description: "Advanced tools for dedicated savers",
      icon: TrendingUp,
      color: "bg-purple-500",
      price: {
        monthly: 4.99,
        yearly: 49.99,
      },
      features: [
        "Everything in Basic",
        "Advanced savings analytics",
        "Multiple savings goals",
        "Savings notifications",
        "Priority email support",
      ],
      notIncluded: ["Financial advisor access", "Personalized strategies"],
      recommended: true,
    },
    {
      id: "pro",
      name: "Financial Freedom Pro",
      description: "Complete financial management suite",
      icon: Rocket,
      color: "bg-emerald-500",
      price: {
        monthly: 9.99,
        yearly: 99.99,
      },
      features: [
        "Everything in Plus",
        "Personalized savings strategies",
        "Financial advisor access",
        "Investment recommendations",
        "Wealth building tools",
        "24/7 priority support",
      ],
      notIncluded: [],
      recommended: false,
    },
  ];

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  const handleContinue = () => {
    if (selectedPackage) {
      onSelectPackage(selectedPackage);
    }
  };

  const getYearlySavings = () => {
    return billingCycle === "yearly" ? "Save 20%" : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <motion.h1
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Savings Package
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Based on your {savingsPercentage}% savings goal of $
            {monthlySavings.toFixed(2)}/month, we've prepared these packages to
            help you succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Tabs
              defaultValue="monthly"
              value={billingCycle}
              onValueChange={setBillingCycle}
              className="w-[400px] max-w-full mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="yearly">
                  Yearly Billing
                  {billingCycle === "yearly" && (
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-primary/20 text-primary"
                    >
                      Save 20%
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <Card
                className={`h-full ${selectedPackage === pkg.id ? "ring-2 ring-primary" : ""}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Sparkles className="h-3.5 w-3.5 mr-1" />
                      Recommended
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${pkg.color} flex items-center justify-center text-white mb-4`}
                  >
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">
                      ${pkg.price[billingCycle as keyof typeof pkg.price]}
                      <span className="text-muted-foreground text-sm font-normal">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {pkg.price[billingCycle as keyof typeof pkg.price] ===
                      0 && (
                      <p className="text-sm text-muted-foreground">
                        Free forever
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">What's included:</h4>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <>
                        <h4 className="text-sm font-medium text-muted-foreground pt-2">
                          Not included:
                        </h4>
                        <ul className="space-y-2.5">
                          {pkg.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <X className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={selectedPackage === pkg.id ? "default" : "outline"}
                    className="w-full"
                    onClick={() => handlePackageSelect(pkg.id)}
                  >
                    {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPackage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex justify-center"
            >
              <Button size="lg" className="gap-2" onClick={handleContinue}>
                Continue with{" "}
                {packages.find((p) => p.id === selectedPackage)?.name}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            {
              icon: Shield,
              title: "Secure Savings",
              description:
                "Bank-level security protects your financial data and savings progress.",
            },
            {
              icon: BarChart4,
              title: "Track Your Progress",
              description:
                "Visual dashboards show your savings growth and help you stay motivated.",
            },
            {
              icon: Zap,
              title: "Quick Setup",
              description:
                "Get started in minutes and begin your savings journey today.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "bg-primary/10"
                : i % 3 === 1
                  ? "bg-blue-500/10"
                  : "bg-emerald-500/10"
            }`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
