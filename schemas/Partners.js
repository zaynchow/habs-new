export default {
  name: "partners",
  type: "document",
  title: "Partners",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Company Name",
      validation: (rule) => rule.required(),
    },
    {
      name: "desc",
      type: "text",
      title: "Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "commission_rate",
      type: "number",
      title: "Commission Rate",
    },
    {
      name: "interest_rate",
      type: "number",
      title: "Interest Rate on Margin Loan",
    },
    {
      name: "image",
      type: "image",
      title: "Logo Image",
      validation: (rule) => rule.required(),
    },
  ],
};
