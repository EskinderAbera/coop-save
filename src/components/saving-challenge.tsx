import { useState } from "react";
import { motion } from "framer-motion";
import { PiggyBank, DollarSign, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function SavingsChallenge() {
  const [savingsPercentage, setSavingsPercentage] = useState(10);

  // This would typically come from your data source
  const totalExpenses = 3005;

  const potentialSavings = (totalExpenses * savingsPercentage) / 100;
  const monthsToSave = [3, 6, 12];

  const handleSliderChange = (value: number[]) => {
    setSavingsPercentage(value[0]);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            Savings Challenge
          </CardTitle>
          <CardDescription>
            Set a savings goal based on your monthly expenses
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Total Expense Amount */}
          <motion.div
            className="flex items-center justify-between p-5 bg-muted rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              max={30}
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
        </CardContent>

        <CardFooter>
          <Button className="w-full">Start Savings Challenge</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
