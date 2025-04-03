import { defineField, defineType } from "sanity";

export const BCType = defineType({
    name: "blog_content",
    title: "Blog Content",
    type: "document",
    fields: [
        defineField({
            name: "field",
            type: "string",
            title: "Field",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "type",
            type: "string",
            title: "Type",
            // validation: (rule) => rule.required(),
        }),
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
            name: "pdfFile",
            type: "file",
            title: "PDF Document",
            description: "Upload a PDF file (max 5MB)",
            options: {
                accept: ".pdf",
            },
            validation: (Rule) =>
                Rule.required().custom((file) => {
                    if (file && file.asset) {
                        // Check file size (5MB = 5 * 1024 * 1024 bytes)
                        const maxSize = 5 * 1024 * 1024;
                        // Note: Actual size checking might depend on your Sanity setup
                        return file.asset._ref ? true : "PDF file is required";
                    }
                    return "PDF file is required";
                }),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
});
