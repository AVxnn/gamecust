"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./PageSearchResult.module.scss";
import { getSearchPosts } from "../../../../../../features/new/getSearch/getSearch";
import PostList from "../../../../../../newComponents/post/postList";

const PageSearchResult = () => {
  const params = useSearchParams() as any;
  const router = useRouter() as any;
  const [loading, setLoading] = useState(false);

  const saveHandler = async (page: any) => {
    const par = params.get("query");

    if (par) {
      const resData = await getSearchPosts(par, page);
      setLoading(true);

      return resData;
    }
  };

  useEffect(() => {
    setLoading(false);
    saveHandler(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, router, params.get("query")]);

  return loading ? (
    <div className={styles.search}>
      <PostList fetchPosts={saveHandler} />
    </div>
  ) : (
    <></>
  );
};

export default PageSearchResult;
