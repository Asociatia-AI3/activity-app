import { CollectionConfig } from "payload";

export const Roles: CollectionConfig = {
  slug: "roles",
  fields: [
    {
        name: "name",
        type: "text",
        required: true,
        unique: true,
    }
  ]
};