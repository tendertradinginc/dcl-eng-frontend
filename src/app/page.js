import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5">
      <h1>hello legendary</h1>
      <Button variant="outline" asChild>
        <Link href="/dashboard"> Dashboard</Link>
      </Button>
    </div>
  );
};

export default page;
