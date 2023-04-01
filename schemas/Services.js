export default {
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "service_name",
      type: "string",
      title: "Service Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "service_short_desc",
      type: "array",
      of: [{ type: "block" }],
      title: "Short Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "service_long_desc",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "break",
        },
      ],
      title: "Long Description",
      validation: (rule) => rule.required(),
    },

    {
      name: "include_accordions",
      type: "boolean",
      title: "Include Accordions",
      initialValue: false,
      validation: (rule) => rule.required(),
    },
    {
      name: "accordions",
      type: "array",
      title: "Accordions",
      hidden: ({ parent }) => !parent?.include_accordions,
      of: [
        {
          name: "single_accordion",
          type: "document",
          title: "Accordion",
          fields: [
            {
              name: "accordion_title",
              type: "string",
              title: "Accordion Title",
              validation: (rule) => rule.required(),
            },
            {
              name: "accordion_desc",
              type: "text",
              title: "Accordion Description",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "service_img",
      type: "image",
      title: "Service Image",
      validation: (rule) => rule.required(),
    },
    {
      name: "include_buttons",
      type: "boolean",
      title: "Include Button",
      initialValue: false,
      validation: (rule) => rule.required(),
    },
    {
      name: "buttons",
      type: "array",
      title: "Buttons",
      hidden: ({ parent }) => !parent?.include_buttons,
      of: [
        {
          name: "single_button",
          type: "document",
          title: "Button",
          fields: [
            {
              name: "button_text",
              type: "string",
              title: "Button Text",
              validation: (rule) => rule.required(),
            },
            {
              name: "button_link",
              type: "url",
              title: "Button Link",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
