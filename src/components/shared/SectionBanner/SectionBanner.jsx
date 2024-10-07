import { ChevronRightIcon } from "lucide-react";
import React from "react";
export default function SectionBanner({ title, breadcrumbs, imgUrl }) {
  return (
    <div className="relative  h-[300px]  md:h-[400px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            imgUrl || "https://picsum.photos/id/43/1000/300"
          })`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-wider">
          {title}
        </h1>
        <nav className="flex items-center text-sm">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index === breadcrumbs.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <>
                  <a href={item.url} className="hover:underline">
                    {item.label}
                  </a>
                  <ChevronRightIcon className="mx-2 h-4 w-4" />
                </>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
