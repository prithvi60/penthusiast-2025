import { defineField, defineType } from "sanity";

export const mediaType = defineType({
    name: "media",
    title: "Media",
    type: "document",
    fields: [
        // defineField({
        //     name: "title",
        //     type: "string",
        //     title: "Title",
        //     validation: (rule) => rule.required(),
        // }),
        defineField({
            name: "image",
            type: "image",
            title: "Blog Post Image",
            fields: [
                {
                    type: "text",
                    name: "alt",
                    title: "ALT",
                    validation: (Rule) => Rule.required(),
                },
            ],
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "url",
            type: "url",
            title: "URL Link",
            validation: (rule) => rule
                .uri({
                    scheme: ['http', 'https'],
                    allowRelative: false
                })
                .required(),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
});
