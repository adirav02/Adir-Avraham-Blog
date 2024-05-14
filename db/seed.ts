import { Newsletter, db } from "astro:db";

export default async function seed() {
  await db.insert(Newsletter).values({
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    fullName: "Ido",
    email: "Idoav10@gmail.com",
  });
}
