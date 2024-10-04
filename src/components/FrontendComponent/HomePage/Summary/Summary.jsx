"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Summary = () => {
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/homepage/summary`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCounts(data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Only run the data fetching on the client side
    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  return (
    <div className="my-32">
      <div>
        <MaxWidthWrapper>
          <div className="flex items-center gap-3">
            {" "}
            <p className="h-0.5 w-14 bg-gradient-to-tr from-[#ffc1957a] to-[#F78C40]"></p>{" "}
            <p className="text-[#F78C40] font-semibold text-xl">Summary</p>{" "}
            <hr className="border flex-1 border-[#718698]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div>
                <span
                  className="text-transparent stroke-2 stroke-gray-300 outline-0 text-9xl font-extrabold"
                  style={{
                    WebkitTextStroke: "2px #d1d5db",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {counts?.totalProject + 100}
                </span>
              </div>
              <div className="flex items-center mt-[-80px] ml-28">
                <p className="text-7xl font-bold">
                  <CountUp end={counts?.totalProject + 100} duration={4} />
                </p>
                <div className="ml-4">
                  <span className=" uppercase">Projects</span>
                  <p className="text-3xl font-semibold">Design</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <span
                  className="text-transparent stroke-2 stroke-gray-300 outline-0 text-9xl font-extrabold"
                  style={{
                    WebkitTextStroke: "2px #d1d5db",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {counts?.totalClientFeedback + 90}
                </span>
              </div>
              <div className="flex items-center mt-[-80px] ml-28">
                <p className="text-7xl font-bold">
                  <CountUp
                    end={counts?.totalClientFeedback + 90}
                    duration={4}
                  />
                </p>
                <div className="ml-4">
                  <span className=" uppercase">Happy</span>
                  <p className="text-3xl font-semibold">Client</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <span
                  className="text-transparent stroke-2 stroke-gray-300 outline-0 text-9xl font-extrabold"
                  style={{
                    WebkitTextStroke: "2px #d1d5db",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {counts?.totalProject + 200}
                </span>
              </div>
              <div className="flex items-center mt-[-80px] ml-28">
                <p className="text-7xl font-bold">
                  <CountUp end={counts?.totalProject + 100} duration={4} />
                </p>
                <div className="ml-4">
                  <span className=" uppercase">Completed</span>
                  <p className="text-3xl font-semibold">Project</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <span
                  className="text-transparent stroke-2 stroke-gray-300 outline-0 text-9xl font-extrabold"
                  style={{
                    WebkitTextStroke: "2px #d1d5db",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {counts?.totalSuccessStory + 70}
                </span>
              </div>
              <div className="flex items-center mt-[-80px] ml-28">
                <p className="text-7xl font-bold">
                  <CountUp end={counts?.totalSuccessStory + 70} duration={4} />
                </p>
                <div className="ml-4">
                  <span className=" uppercase">Success</span>
                  <p className="text-3xl font-semibold">Story</p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Summary;
