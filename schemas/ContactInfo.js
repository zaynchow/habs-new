export default {
  name: "contact-info",
  type: "document",
  title: "Contact Info",
  fields: [
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
