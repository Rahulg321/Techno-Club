const member = {
  name: "member",
  title: "Members",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "position",
      title: "Position",
      type: "reference",
      to: [{ type: "position" }],
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
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      //   sanity way of saying rich text
      of: [{ type: "block" }],
    },
  ],
};

export default member;
