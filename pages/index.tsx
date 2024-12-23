import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

import { Layout, PopularPosts } from "~/components";
import { fetchPosts, getTopPosts } from "~/utils";
import type { Post, SocialMediaInfo } from "~/types";

const socialLinks: SocialMediaInfo[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/thesanjeevsharma",
    hoverClass: "hover:text-blue-500",
    icon: <FaLinkedin size={18} color="#3b82f6" />,
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/thesanjeevsharma",
    hoverClass: "hover:text-violet-500",
    icon: <FaInstagram size={18} color="#8b5cf6" />,
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/thesnjvsharma",
    hoverClass: "hover:text-sky-500",
    icon: <FaTwitter size={18} color="#0ea5e9" />,
  },
  {
    platform: "Github",
    url: "https://github.com/thesanjeevsharma",
    hoverClass: "hover:text-neutral-500",
    icon: <FaGithub size={18} color="#f5f5f5" />,
  },
];

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

          <div className="flex flex-col md:flex-row">
            {socialLinks.map(({ platform, url, hoverClass, icon }) => (
              <a
                className={`flex items-center text-slate-500 mr-4 mb-4 md:mb-0 ${hoverClass}`}
                key={platform}
                href={url}
              >
                {icon}
                <span className="ml-1">{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      <PopularPosts posts={posts} />

      <a
        className="flex items-center w-fit text-slate-500 hover:text-sky-600"
        href="https://dev.to/thesanjeevsharma"
      >
        <span className="mr-1">Read more posts</span>
        <BsArrowUpRight />
      </a>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  const topPosts = getTopPosts(posts, 3);

  return {
    props: {
      posts: topPosts,
    },
    revalidate: 60 * 60 * 24 * 30, // 30 days
  };
}
