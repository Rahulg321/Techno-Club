"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Tabs, Tab } from "@nextui-org/react";

const EventsNavList = () => {
  const pathname = usePathname();

  const tabs = [
    { key: "engineering", title: "Current" },
    { key: "technology", title: "Previous" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      <Tabs variant="underlined" size="lg" aria-label="Tabs variants">
        {tabs.map((tab) => {
          return <Tab key={tab.key} title={tab.title} />;
        })}
      </Tabs>
    </div>
  );
};

export default EventsNavList;
