import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/account",
          "/settings",
          "/copyright",
          "/agreement",
          "/privacy",
          "/account",
          "/settings/profile",
          "/settings/main",
          "/subs",
          "/settings",
        ],
      },
    ],
    sitemap: `process.env.NEXTAUTH_URL/sitemap.xml`,
  };
}
