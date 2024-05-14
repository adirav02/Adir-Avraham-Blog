import { Newsletter, db } from "astro:db";

export default async function seed() {
  await db.insert(Newsletter).values({
    fullName: "Ido",
    email: "Idoav10@gmail.com",
  });
}
