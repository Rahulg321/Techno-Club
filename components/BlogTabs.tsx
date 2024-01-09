"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

const BlogTabs = () => {
  const tabs = [
    { key: "engineering", title: "Engineering" },
    { key: "technology", title: "Technology" },
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
