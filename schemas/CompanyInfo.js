export default {
  name: "company-info",
  type: "document",
  title: "Company Info",
  fields: [
    {
      name: "mission",
      type: "text",
      title: "Mission",
      validation: (rule) => rule.required(),
    },
    {
      name: "vision",
      type: "text",
      title: "Vision",
      validation: (rule) => rule.required(),
    },

    {
      name: "book_size",
      type: "number",
      title: "Client Book Size",
      validation: (rule) => rule.integer().required(),
    },
    {
      name: "years_in_brokerage",
      type: "number",
      title: "Years in Brokerage",
      validation: (rule) => rule.required(),
    },
    {
      name: "num_of_branches",
      type: "number",
      title: "Number of Branches",
      validation: (rule) => rule.required(),
    },
    {
      name: "num_of_clients",
      type: "number",
      title: "Number of Clients",
      validation: (rule) => rule.required(),
    },
  ],
};
