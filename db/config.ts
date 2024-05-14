import { column, defineDb, defineTable } from "astro:db";

const Newsletter = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    fullName: column.text(),
    email: column.text(),
  },
});

export default defineDb({
  tables: { Newsletter },
});
