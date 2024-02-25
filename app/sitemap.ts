import { MetadataRoute } from "next";
import { getPostListAll } from "../features/new/getPostList/getPostList";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const response = await getPostListAll();

  // const postsEntries = response.map(({ postId }: any) => ({
  //   url: `https://gamecust.ru/post/${postId}`,
  //   lastModified: new Date(),
  // }));

  return [
    {
      url: "https://gamecust.ru",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://gamecust.ru/new",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gamecust.ru/categories",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://gamecust.ru/account",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://gamecust.ru/settings",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://gamecust.ru/settings/main",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://gamecust.ru/settings/profile",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://gamecust.ru/settings/profile",
      lastModified: new Date(),
      priority: 0.5,
    },
    // ...postsEntries,
  ];
}
