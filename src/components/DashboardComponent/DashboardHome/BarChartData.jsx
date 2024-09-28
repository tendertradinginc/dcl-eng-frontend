"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", MedicalEquipment: 186, FurnitureEquipment: 80 },
  { month: "February", MedicalEquipment: 305, FurnitureEquipment: 200 },
  { month: "March", MedicalEquipment: 237, FurnitureEquipment: 120 },
  { month: "April", MedicalEquipment: 73, FurnitureEquipment: 190 },
  { month: "May", MedicalEquipment: 209, FurnitureEquipment: 130 },
  { month: "June", MedicalEquipment: 214, FurnitureEquipment: 140 },
];

const chartConfig = {
  medical: {
    label: "Medical Equipment",
    color: "#16a249",
  },
  furniture: {
    label: "Furniture Equipment",
    color: "#8cd9a6",
  },
};

const BarChartData = () => {
  return (
    <div >
      <Card className="rounded-none border-none">
        <CardHeader>
          <CardTitle>Statistics of per month Equipment</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar
                dataKey="MedicalEquipment"
                fill={chartConfig.medical.color}
                radius={4}
              />
              <Bar
                dataKey="FurnitureEquipment"
                fill={chartConfig.furniture.color}
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BarChartData;
