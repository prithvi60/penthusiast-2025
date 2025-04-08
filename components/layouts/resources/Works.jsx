import { Gradient } from '@/components/UI/Gradient'
import { WorksModal } from '@/components/UI/Modal'
import { client } from '@/sanity/lib/client';
import { B2B_QUERY, B2C_QUERY, BC_QUERY, MC_QUERY, WCP_QUERY } from '@/sanity/Queries';
import { B2BContent, B2CContent, WCP } from '@/utils/Data'

const Works = async () => {
  const wcpPosts = await client.fetch(
    WCP_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["post", "media", "wcp", "b2b", "b2c", "marketing content", "blog content"],
      },
    }
  );
  const b2bPosts = await client.fetch(
    B2B_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["post", "media", "wcp", "b2b", "b2c", "marketing content", "blog content"],
      },
    }
  );
  const b2cPosts = await client.fetch(
    B2C_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["post", "media", "wcp", "b2b", "b2c", "marketing content", "blog content"],
      },
    }
  );
  const MCPosts = await client.fetch(
    MC_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["post", "media", "wcp", "b2b", "b2c", "marketing content", "blog content"],
      },
    }
  );

  const totalPosts = [
    ...b2cPosts,
    ...b2bPosts,
    ...MCPosts,
    ...wcpPosts,
  ];

  return (
    <section className='padding w-full space-y-14'>
      <h2 className="text-3xl text-center uppercase sm:text-5xl lg:text-6xl font-bold">
        WORKS
      </h2>
      <Gradient rotate />
      <div className='space-y-16 md:space-y-32'>
        <WorksModal data={totalPosts} />
      </div>
    </section>
  )
}

export default Works

