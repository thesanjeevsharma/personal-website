export type SocialMediaInfo = {
  platform: "Github" | "LinkedIn" | "Twitter" | "Instagram";
  url: string;
  icon: JSX.Element;
  color: string;
};

export type Post = {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  url: string;
  tag_list: string[];
  public_reactions_count: number;
};
