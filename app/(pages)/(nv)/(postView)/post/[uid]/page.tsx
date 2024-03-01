import React from "react";
import PostView from "../../../../../../newComponents/post/postView";
import { getPost } from "../../../../../../features/new/getPost/getPost";

export async function generateMetadata({ params }: any) {
  // read route params
  const id = params.uid;

  // fetch data
  const product = await getPost(id);

  return {
    title: `${product.title}`,
    description: `${product.data.filter((e: any) => e.type == "text")[0]?.value}`,
    alternates: {
      canonical: `https://gamecust.ru/post/${product.postId}`
    },
    robots: {
      index: true,
      follow: true,
      nocache: true
    },
    openGraph: {
      title: `${product.title}`,
      description: `${product.data.filter((e: any) => e.type == "text")[0]?.value}`,
      url: `https://gamecust.ru/post/${product.postId}`,
      siteName: "GameCust",
      images: [
        {
          url: product.data.filter((e: any) => e.type == "media")[0]?.href,
        },
      ],
    },
  };
}

const PostPage = () => {
  return <PostView />;
};

export default PostPage;
