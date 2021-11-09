import SimpleSchema from "simpl-schema";
export const CategorySchema = new SimpleSchema({
  name: {
    type: String,
  },

  image: {
    type: String,
  },

  createdAt: {
    type: Date,
    label: "Date/time this catalog item was created at",
  },

  updatedAt: {
    type: Date,
    label: "Updated at",
  },
});
