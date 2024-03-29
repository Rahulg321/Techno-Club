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
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "venue",
      title: "Venue",
      type: "string",
    },

    {
      name: "eventDate",
      title: "Event Date",
      type: "date",
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
