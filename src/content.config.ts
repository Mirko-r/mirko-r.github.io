import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().url().optional(),
        tags: z.array(z.string()),
        order: z.number().default(0),
    }),
});

const career = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/career" }),
    schema: z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.string(),
        endDate: z.string().default('Now'),
    }),
});

export const collections = { 
  'projects': projects, 
  'career': career 
};