// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      relatedPosts: z.array(reference("posts")),
    }),
});

const tools = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      relatedPosts: z.array(reference("posts")),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: posts,
  tools: tools,
};
