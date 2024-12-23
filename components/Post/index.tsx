import React from "react";

import type { Post as PostType } from "~/types";

type Props = {
  post: PostType;
  className?: string;
};

const Post = ({ post, className = "" }: Props) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <a className="hover:text-lime-500 w-fit transition-colors" href={post.url}>
        <h3 className="mb-1 text-xl">{post.title}</h3>
      </a>
      <p className="text-slate-500 mb-1 text-base">{post.description}</p>
      <small className="text-slate-500">{post.readable_publish_date}</small>
    </div>
  );
};

export default Post;
