import React from "react";
import PostView from "../../../../../../newComponents/post/postView";
import { Metadata, ResolvingMetadata } from "next";
import { getPost } from "../../../../../../features/new/getPost/getPost";

export async function generateMetadata(
  { params }: any
) {
  // read route params
  const id = params.uid;

  // fetch data
  const product = await getPost(id);
  console.log(id, product)

  return {
    title: `${product.stared[0].value} | GameCust новости из мира игр`,
    description: product.stared[1]?.value,
  };
}

const PostPage = () => {
  return <PostView />;
};

export default PostPage;
