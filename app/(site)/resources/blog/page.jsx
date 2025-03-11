import Blogs from '@/components/layouts/resources/Blogs'
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/Queries';
import React from 'react'

const Page = async () => {
    const posts = await client.fetch(
        POSTS_QUERY,
        {},
        {
            cache: "no-cache",
            next: {
                tags: ["post", "media", "wcp", "b2b", "b2c"],
            },
        }
    );

    return (
        <div>
            <Blogs posts={posts} />
        </div>
    )
}

export default Page
