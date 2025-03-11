import MediaComponent from '@/components/layouts/resources/MediaComponent'
import { client } from '@/sanity/lib/client';
import { MEDIA_QUERIES } from '@/sanity/Queries';
import React from 'react'

const Page = async () => {
    const mediaPosts = await client.fetch(
        MEDIA_QUERIES,
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
            <MediaComponent media={mediaPosts} />
        </div>
    )
}

export default Page
