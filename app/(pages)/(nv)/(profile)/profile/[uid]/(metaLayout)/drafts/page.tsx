"use client";

import React, { useContext, useEffect, useState } from "react";
import Drafts from "../../../../../../../../components/legendary/MiddleBlock/ChangeProfileBlock/Drafts";
import { getPostsId } from "../../../../../../../../features/new/getPostsId/getPostsId";
import { useParams, useRouter } from "next/navigation";
import isRoleHandler from "../../../../../../../../features/isRoleHandler";
import { Context } from "../../../../../../layout";
import { observer } from "mobx-react-lite";

const DraftsPage = () => {
  const { uid } = useParams() as any;
  const [loading, setLoading] = useState(false);

  const { mobxStore } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (mobxStore.user.id) {
      if (isRoleHandler(mobxStore.user.id, uid)) {
        console.log("есть доступ");
        setLoading(true);
      } else {
        router.push(`/profile/${uid}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobxStore.user]);

  const getFirstPosts = async (page = 0) => {
    return getPostsId(uid, page);
  };

  return loading ? <Drafts fetchPosts={getFirstPosts} /> : <></>;
};

export default observer(DraftsPage);
