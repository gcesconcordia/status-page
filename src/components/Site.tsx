/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useEffect, useState } from "react";

export interface SiteProps {
  label: string;
  url: string;
}

const Site = ({ label, url }: SiteProps) => {
  const [isHealthy, setIsHealthy] = useState(false);

  useEffect(() => {
    async function fetchHealth() {
      try {
        const response = await fetch(url + "/api/healthcheck");
        const health = await response.json();
        console.log(health);
        if (health.status === "ok") {
          setIsHealthy(true);
        } else {
          setIsHealthy(false);
        }
      } catch (error) {
        console.error("Error fetching health:", error);
        setIsHealthy(false); // Handle errors as needed
      }
    }

    void fetchHealth(); // You need to invoke the function here
  }, []);

  return (
    <li className="flex flex-wrap items-center space-x-2">
      <div
        className={"h-2 w-2 rounded-full p-1".concat(
          " ",
          isHealthy ? "bg-green-500" : "bg-red-500",
        )}
      ></div>
      <a className="" href={url}>
        {label}
      </a>
      &nbsp;{"-"}&nbsp;{isHealthy ? "Available" : "Degraded"}
    </li>
  );
};

export default Site;
