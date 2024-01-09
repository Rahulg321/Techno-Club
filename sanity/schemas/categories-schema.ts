import { validation } from "sanity";

const category = {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => {
        Rule.required();
      },
    },
  ],
};

export default category;
