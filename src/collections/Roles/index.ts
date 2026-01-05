import { CollectionConfig } from "payload";

export const Roles: CollectionConfig = {
  slug: "roles",
  fields: [
    {
      type: "text",
      name: "name",
      unique: true,
      required: true,
      label: "Role Name",
    },
  ],
};
