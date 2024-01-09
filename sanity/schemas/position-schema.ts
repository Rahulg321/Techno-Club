const position = {
  name: "position",
  title: "Positions",
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

export default position;
