export default {
  name: "blog_posts",
  type: "document",
  title: "Blog Posts",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
      validation: (rule) => rule.required(),
    },

    {
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "break" }],
      validation: (rule) => rule.required(),
    },
  ],
};
