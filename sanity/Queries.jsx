import { groq } from "next-sanity";

// post queries
export const POSTS_QUERY = groq`
*[_type == "post"]|order(publishedAt desc)[0...12] {
  title,
  slug,
  blogShortRead,
  publishedAt,
  body,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  "plainBody": body[].children[].text
}`;

export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  blogShortRead,
  publishedAt,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  "plainBody": body[].children[].text,
  body[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`;

// media queries

export const MEDIA_QUERIES = groq`
*[_type == "media"]|order(publishedAt desc) {
  title,
  publishedAt,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  url
}`;

// work samples
export const WCP_QUERY = groq`
*[_type == "wcp"]|order(publishedAt desc) {
  field,
  type,
  "imageUrl": image.asset->url,
  "altText": image.alt,
  "pdfUrl": pdfFile.asset->url,
  publishedAt
}`;

export const B2B_QUERY = groq`
*[_type == "b2b"]|order(publishedAt desc) {
  field,
  type,
  "imageUrl": image.asset->url,
  "altText": image.alt,
  "pdfUrl": pdfFile.asset->url,
  publishedAt
}`;

export const B2C_QUERY = groq`
*[_type == "b2c"]|order(publishedAt desc) {
  field,
  type,
  "imageUrl": image.asset->url,
  "altText": image.alt,
  "pdfUrl": pdfFile.asset->url,
  publishedAt
}`;

// CONTENT QUERIES
export const MC_QUERY = groq`
*[_type == "marketing_content"]|order(publishedAt desc) {
  field,
  type,
  "imageUrl": image.asset->url,
  "altText": image.alt,
  "pdfUrl": pdfFile.asset->url,
  publishedAt
}`;

export const BC_QUERY = groq`
*[_type == "blog_content"]|order(publishedAt desc) {
  field,
  type,
  "imageUrl": image.asset->url,
  "altText": image.alt,
  "pdfUrl": pdfFile.asset->url,
  publishedAt
}`;