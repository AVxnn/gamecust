import React from "react";
import AccountBlock from "../../../../../components/legendary/MiddleBlock/AccountBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аккаунт",
};

const PostPage = () => {
  return <AccountBlock />;
};

export default PostPage;
