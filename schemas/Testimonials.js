export default {
  name: "testimonials",
  type: "document",
  title: "Testimonials",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "designation",
      type: "string",
      title: "Designation",
      validation: (rule) => rule.required(),
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "img",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    },
  ],
};
