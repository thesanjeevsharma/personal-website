import Image from "next/image";

import { Layout, PopularPosts, Projects, SocialLinks } from "~/components";
import { fetchPosts, getTopPosts } from "~/utils";
import type { Post } from "~/types";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <Layout>
      <header className="flex flex-col md:flex-row items-center mb-8 md:mb-16">
        <Image
          alt="Sanjeev Sharma"
          className="rounded-full md:mr-8 mb-8 md:mb-0"
          height={180}
          width={180}
          src="/profile-picture.jpg"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8">
            Hey 👋, I&apos;m Sanjeev.
            <br />
            <span className="text-slate-500">
              I&apos;m a frontend engineer at Syfe.
            </span>
          </h1>

          <SocialLinks />
        </div>
      </header>

      <Projects />
      
      <div className="h-4 md:h-8" />

      <PopularPosts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  const topPosts = getTopPosts(posts, 4);

  return {
    props: {
      posts: topPosts,
    },
    revalidate: 60 * 60 * 24 * 3, // 3 days
  };
}
