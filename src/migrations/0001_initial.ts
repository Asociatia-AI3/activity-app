import { Collection } from "pocketbase";

export default [
  new Collection({
    name: "users",
    type: "auth",
    schema: [
      { name: "name", type: "text" },
      { name: "email", type: "email", required: true },
      { name: "reset_password_token", type: "text" },
      { name: "reset_password_expiration", type: "date" },
      { name: "salt", type: "text" },
      { name: "hash", type: "text" },
      { name: "login_attempts", type: "number", default: 0 },
      { name: "lock_until", type: "date" }
    ]
  }),

  new Collection({
    name: "roles",
    schema: [
      { name: "name", type: "text", required: true }
    ]
  }),

  new Collection({
    name: "user_roles",
    schema: [
      { name: "user", type: "relation", collectionId: "users", required: true },
      { name: "role", type: "relation", collectionId: "roles", required: true }
    ]
  }),

  new Collection({
    name: "members",
    schema: [
      { name: "membership_type", type: "select", options: ["aspiring", "voting"] },
      { name: "photo_path", type: "text" }
    ]
  }),

  new Collection({
    name: "user_membership",
    schema: [
      { name: "user", type: "relation", collectionId: "users", required: true },
      { name: "membership", type: "relation", collectionId: "members", required: true, unique: true }
    ]
  }),

  new Collection({
    name: "voting_member_type",
    schema: [
      { name: "type_name", type: "select", options: ["honorary", "founder"] }
    ]
  }),

  new Collection({
    name: "membership_voting_type",
    schema: [
      { name: "member", type: "relation", collectionId: "members", required: true },
      { name: "voting_type", type: "relation", collectionId: "voting_member_type", required: true }
    ]
  }),

  new Collection({
    name: "membership_fee_payments",
    schema: [
      { name: "payment_amount", type: "number" },
      { name: "payment_time", type: "date" },
      { name: "payer_email", type: "email" },
      { name: "on_behalf_of", type: "relation", collectionId: "members" }
    ]
  }),

  new Collection({
    name: "media",
    schema: [
      { name: "file", type: "file", required: true },
      { name: "mime_type", type: "text" },
      { name: "file_size", type: "number" },
      { name: "uploaded_by", type: "relation", collectionId: "users" }
    ]
  }),

  new Collection({
    name: "initiatives",
    schema: [
      { name: "title", type: "text", required: true },
      { name: "description", type: "text" },
      { name: "image", type: "relation", collectionId: "media" },
      { name: "site_link", type: "url" }
    ]
  }),

  new Collection({
    name: "posts",
    schema: [
      { name: "title", type: "text", required: true },
      { name: "content", type: "text" },
      { name: "author", type: "relation", collectionId: "users" },
      { name: "initiative", type: "relation", collectionId: "initiatives" }
    ]
  }),

  new Collection({
    name: "meetings",
    schema: [
      { name: "title", type: "text", required: true },
      { name: "meeting_date", type: "date", required: true },
      { name: "venue", type: "text", required: true },
      { name: "type", type: "select", options: ["workshop", "anti-workshop"] },
      { name: "workshop_topic", type: "select", options: ["Demo your stack", "F*ck-up nights", "Meet the business"] },
      { name: "presenter", type: "relation", collectionId: "members" },
      { name: "discussion_agenda", type: "text" }
    ]
  }),

  new Collection({
    name: "ninjas",
    schema: [
      { name: "child_name", type: "text", required: true },
      { name: "age", type: "number", required: true },
      { name: "useful_info", type: "text" },
      { name: "guardian_name", type: "text", required: true },
      { name: "guardian_email", type: "email", required: true },
      { name: "guardian_phone", type: "text", required: true },
      { name: "safety_agreement", type: "bool", required: true },
      { name: "photo_release_agreement", type: "bool", required: true }
    ]
  }),

  new Collection({
    name: "festival_editions",
    schema: [
      { name: "year", type: "number", required: true },
      { name: "title", type: "text", required: true },
      { name: "theme", type: "text" },
      { name: "description", type: "text" }
    ]
  }),

  new Collection({
    name: "festival_sections",
    schema: [
      { name: "edition", type: "relation", collectionId: "festival_editions", required: true },
      { name: "name", type: "text", required: true }
    ]
  }),

  new Collection({
    name: "activities",
    schema: [
      { name: "edition", type: "relation", collectionId: "festival_editions", required: true },
      { name: "title", type: "text", required: true },
      { name: "description", type: "text" },
      { name: "type", type: "select", options: ["expo", "talk", "workshop", "social", "entertainment"] },
      { name: "section", type: "relation", collectionId: "festival_sections" }
    ]
  }),

  new Collection({
    name: "schedule",
    schema: [
      { name: "edition", type: "relation", collectionId: "festival_editions", required: true },
      { name: "start_time", type: "date", required: true },
      { name: "end_time", type: "date", required: true },
      { name: "activity", type: "relation", collectionId: "activities", required: true }
    ]
  })
];
