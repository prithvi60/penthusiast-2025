import { Gradient } from "@/components/UI/Gradient";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const BlogSpecificPage = ({ post }) => {
  const readableTime = post.plainBody.filter(Boolean).join(" ");

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const blogContent = readableTime || "";
  const readingTime = calculateReadTime(blogContent);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section className="padding w-full space-y-14 relative">
      {/* <div className="w-full h-[35vh] md:h-[55vh] overflow-hidden relative max-w-3xl rounded-lg mx-auto">
        <Image
          src={post.imageUrl}
          alt="blog background image"
          fill
          className=" object-cover object-center"
        />
      </div> */}
      <div className="text-center space-y-5 relative">
        <Gradient rotate />
        <h4 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
          {post.title}
        </h4>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center sm:gap-10">
          <h4 className="flex items-center gap-2 text-base md:text-lg capitalize">
            {readingTime} min{readingTime > 1 ? "s" : ""} Read
          </h4>
          <h5 className="text-base font-medium tracking-wider md:text-lg">
            {formattedDate}
          </h5>
        </div>
      </div>
      <div className="max-w-7xl prose prose-blue mx-auto prose-h1:text-3.5xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-bold prose-h4:text-2xl prose-h4:font-bold prose-p:leading-relaxed prose-p:text-lg lg:prose-p:text-xl prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal">
        <PortableText value={post.body} components={customComponents} />
      </div>
    </section>
  );
};

const customComponents = {
  types: {
    image: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
        alt={value?.alt || "Image"}
        className="w-full h-full max-w-md max-h-full mx-auto mt-20 mb-20 md:mt-20 md:mb-10"
      />
    ),
  },
};

// const customComponents = {
//   block: {
//     h1: ({ children }) => <h1 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h1>,
//     h2: ({ children }) => <h2 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h2>,
//     h3: ({ children }) => <h3 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h3>,
//     h4: ({ children }) => <h4 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h4>,
//     h5: ({ children }) => <h5 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h5>,
//     h6: ({ children }) => <h6 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h6>,
//     normal: ({ children }) => <p className="ml-10 text-base font-Montserrat lg:text-xl">{children}</p>,
//   },
//   list: {
//     bullet: ({ children }) => (
//       <ul className="ml-10 space-y-2 list-disc">{children}</ul>
//     ),
//     number: ({ children }) => (
//       <ol className="ml-10 space-y-2 list-decimal">{children}</ol>
//     ),
//   },
//   listItem: {
//     bullet: ({ children }) => <li className="ml-5">{children}</li>,
//     number: ({ children }) => <li className="ml-5">{children}</li>,
//   },
//   types: {
//     image: ({ value }) => (
//       <img
//         src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
//         alt={value?.alt || 'Image'}
//         className="w-full h-full max-w-md max-h-full my-8"
//       />
//     ),
//   },
// };
