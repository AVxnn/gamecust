import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
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
  };
}
