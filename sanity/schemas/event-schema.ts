const event = {
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
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

export default event;
