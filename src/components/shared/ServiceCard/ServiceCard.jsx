import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ data }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden group relative border-purple-200 hover:shadow-md transition-shadow duration-300">
      <div className="h-48 relative overflow-hidden group-hover:h-40 transition-all duration-300">
        <Image
          src={data.image || "/serviceCard4.jpg"}
          alt={data.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 pb-0 bg-white">
        <h2 className="text-xl font-bold mb-2">{data.name}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          {data.shortDescription}
        </p>
        <div className="pt-0.5 pb-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link
            href={`/services/${data.category}/${data._id}`}
            className="w-full block"
          >
            <Button
              variant="secondary"
              className="w-full hover:text-[#F78C40] gap-1"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
