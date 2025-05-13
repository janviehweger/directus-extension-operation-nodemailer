export default {
  id: "operation-nodemailer",
  name: "Nodemailer",
  icon: "box",
  description: "Sending mails with nodemailer!",
  overview: ({
    from,
    subject,
    text,
    url,
    bcc,
    SMTP_HOST,
    SMTP_USER,
    SMTP_PASS,
    filename,
  }) => [
    {
      label: "from",
      text: from,
    },
    {
      label: "subject",
      text: subject,
    },
    {
      label: "Text",
      text: text,
    },
    {
      label: "URL",
      text: url,
    },
    {
      label: "bcc",
      text: bcc,
    },
  ],
  options: [
    {
      field: "from",
      name: "from",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "subject",
      name: "subject",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "text",
      name: "Text",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "url",
      name: "URL",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "bcc",
      name: "bcc",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "SMTP_HOST",
      name: "SMTP_HOST",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "SMTP_USER",
      name: "SMTP_USER",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "SMTP_PASS",
      name: "SMTP_PASS",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "filename",
      name: "filename",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
  ],
};
