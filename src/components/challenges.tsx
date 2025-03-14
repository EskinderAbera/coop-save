import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Challenge() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Starter Plan */}
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl">Starter</CardTitle>
          <CardDescription>
            Perfect for small teams just getting started
          </CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-muted-foreground ml-1">/month</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-2">
            {[
              "5 projects",
              "10 team members",
              "5GB storage",
              "Basic analytics",
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>

      {/* Pro Plan */}
      <Card className="flex flex-col relative border-primary">
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
        <CardHeader>
          <CardTitle className="text-xl">Pro</CardTitle>
          <CardDescription>For growing teams with bigger needs</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">$79</span>
            <span className="text-muted-foreground ml-1">/month</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-2">
            {[
              "Unlimited projects",
              "50 team members",
              "50GB storage",
              "Advanced analytics",
              "Priority support",
              "Custom integrations",
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="default">
            Get Started
          </Button>
        </CardFooter>
      </Card>

      {/* Enterprise Plan */}
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl">Enterprise</CardTitle>
          <CardDescription>
            For large organizations with specific requirements
          </CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">Custom</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-2">
            {[
              "Unlimited everything",
              "Dedicated account manager",
              "24/7 phone support",
              "Custom SLA",
              "On-premise deployment option",
              "Advanced security features",
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
