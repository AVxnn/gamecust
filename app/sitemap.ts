import { MetadataRoute } from "next";
import { getPostListAll } from "../features/new/getPostList/getPostList";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const response = await getPostListAll();

  // const postsEntries =
  //   response.map(({ postId }: any) => ({
  //     url: `https://gamecust.ru/post/${postId}`,
  //     lastModified: new Date(),
  //     priority: 1,
  //     changeFrequency: "daily",
  //   })) ?? [];

  return [
    {
      url: "https://gamecust.ru",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/new",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/categories",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/account",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/category/65b62e79fbacba7001ce10b0",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/category/65b62ef0fbacba7001ce10d0",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/category/65b62eadfbacba7001ce10b2",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/settings",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/settings/main",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/settings/profile",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    {
      url: "https://gamecust.ru/settings/profile",
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "daily",
    },
    // ...postsEntries,
  ];
}
