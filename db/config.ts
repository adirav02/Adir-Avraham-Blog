import { column, defineDb, defineTable } from "astro:db";

const Newsletter = defineTable({
  columns: {
    fullName: column.text(),
    email: column.text({ primaryKey: true }),
  },
});

export default defineDb({
  tables: { Newsletter },
});
