export default {
  name: "authors",
  type: "document",
  title: "Authors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Author Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Author Image",
      validation: (rule) => rule.required(),
    },
  ],
};
