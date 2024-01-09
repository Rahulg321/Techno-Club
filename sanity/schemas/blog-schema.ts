const blog = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) =>
        Rule.required().min(10).error("write a sufficiently big title").max(80),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule: any) => {
        Rule.required();
      },
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      //   sanity way of saying rich text
      of: [{ type: "block" }],
    },
  ],
};

export default blog;
