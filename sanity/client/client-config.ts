import { createClient } from "next-sanity";

const client = createClient({
  projectId: "uz88vsv1",
  dataset: "production",
  apiVersion: "2024-01-09",
});

export default client;
