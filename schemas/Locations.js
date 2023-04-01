export default {
  name: "locations",
  type: "document",
  title: "Locations",
  fields: [
    {
      name: "city",
      type: "string",
      title: "City",
      validation: (rule) => rule.required(),
    },
    {
      name: "offices",
      type: "array",
      title: "Office Locations",
      of: [
        {
          name: "single_office_location",
          type: "document",
          title: "Single Office Location",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              validation: (rule) => rule.required(),
            },
            {
              name: "address",
              type: "string",
              title: "Address",
              validation: (rule) => rule.required(),
            },
            {
              name: "phone_num",
              type: "string",
              title: "Phone Number",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
};
