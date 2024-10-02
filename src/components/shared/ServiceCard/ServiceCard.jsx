import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function ServiceCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden group relative border-purple-200 hover:shadow-md transition-shadow duration-300">
      <div className="h-80 relative">
        <Image
          src="https://picsum.photos/id/156/200/300"
          alt="Road construction workers operating paving equipment at sunset"
          layout="fill"
          objectFit="cover"
        />

      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2">PIPE SUPPLY & MANUFACTURER</h2>
        <p className="text-sm text-muted-foreground">
          We maintain this by ensuring transparency and professional conduct in
          every aspect of our work.
        </p>
      </CardContent>
      <CardFooter className="p-4 bg-white lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:ease-in-out">
        <Link href="/services/road-construction/123" className="w-full">
          <Button variant="ghost" className="w-full justify-between">
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
