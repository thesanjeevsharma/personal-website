import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { Post } from "~/components";
import type { Post as PostType } from "~/types";

type Props = {
  posts: PostType[];
};

const PopularPosts = ({ posts }: Props) => {
  return (
    <div className="flex flex-col mb-4">
      <h3 className="uppercase mb-4 text-sm text-bold">Popular Posts 📜</h3>

      <div className="grid grid-cols-1 gap-4 mb-6">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>

      <a
        className="flex items-center w-fit text-slate-500 hover:text-sky-600"
        href="https://dev.to/thesanjeevsharma"
      >
        <span className="mr-1">Read more posts</span>
        <BsArrowUpRight />
      </a>
    </div>
  );
};

export default PopularPosts;
