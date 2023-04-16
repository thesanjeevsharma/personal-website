import React from "react";

import type { Post as PostType } from "~/types";

type Props = {
  post: PostType;
  className?: string;
};

const Post = ({ post, className = "" }: Props) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <a className="hover:text-lime-500 w-fit" href={post.url}>
        <h3 className="mb-1 text-xl">{post.title}</h3>
      </a>
      <div className="flex mb-2">
        {post.tag_list.map((tag) => (
          <span className="mr-1 text-sm text-slate-500" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-slate-500 mb-1">{post.description}</p>
      <small className="text-slate-500">{post.readable_publish_date}</small>
    </div>
  );
};

export default Post;
