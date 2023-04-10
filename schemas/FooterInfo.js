export default {
  name: "footer-info",
  type: "document",
  title: "Footer Info",
  fields: [
    {
      name: "desc",
      type: "string",
      title: "Company Highlight Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "license_cert",
      type: "string",
      title: "License & Certifications",
      validation: (rule) => rule.required(),
    },
    {
      name: "phone_num",
      type: "string",
      title: "Phone Number",
      validation: (rule) => rule.required(),
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      validation: (rule) => rule.required(),
    },
    {
      name: "email_address",
      type: "string",
      title: "Email Address",
      validation: (rule) => rule.required(),
    },
  ],
};
