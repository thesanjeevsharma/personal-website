import React from "react";

import { Post } from "~/components";
import type { Post as PostType } from "~/types";

type Props = {
  posts: PostType[];
};

const PopularPosts = ({ posts }: Props) => {
  return (
    <div className="flex flex-col mb-4">
      <h3 className="uppercase mb-4">Popular posts</h3>

      {posts.map((post) => (
        <Post key={post.slug} className="mb-5" post={post} />
      ))}
    </div>
  );
};

export default PopularPosts;
