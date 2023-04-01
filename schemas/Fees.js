export default {
  name: "fees",
  type: "document",
  title: "Fees & Charges",
  fields: [
    {
      name: "service_name",
      type: "string",
      title: "Service Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "period",
      type: "string",
      options: {
        list: [
          { title: "One-time", value: "one-time" },
          { title: "Monthly", value: "monthly" },
          { title: "Yearly", value: "yearly" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.valueOfField("price") > 0 && rule.required(),
      hidden: ({ parent }) => !parent?.price,
    },
  ],
};
