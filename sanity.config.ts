import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
  projectId: "uz88vsv1",
  dataset: "production",
  title: "Techno Club CMS",
  apiVersion: "2024-01-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
