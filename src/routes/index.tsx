import Challenge from "@/components/challenges";
import SavingsChallengeLanding from "@/components/landing-component";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  // return <SavingsChallengeLanding />;
  return <Challenge />;
}
