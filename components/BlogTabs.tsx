"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

const BlogTabs = () => {
  const tabs = [
    { key: "all", title: "All" },
    { key: "engineering", title: "Engineering" },
    { key: "technology", title: "Technology" },
    { key: "jobs", title: "Jobs" },
    { key: "ai", title: "Artificial Intelligence" },
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

export default BlogTabs;
