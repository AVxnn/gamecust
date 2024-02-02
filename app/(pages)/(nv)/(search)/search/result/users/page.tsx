"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSearchUsers } from "../../../../../../../features/new/getSearch/getSearch";
import UserList from "../../../../../../../newComponents/userList";

const Users = () => {
  const params = useSearchParams() as any;
  const router = useRouter() as any;
  const [loading, setLoading] = useState(false);

  const saveHandler = async (page: any) => {
    const par = params.get("query");

    if (par) {
      const resData = await getSearchUsers(par, page);
      setLoading(true);

      return resData;
    }
  };

  useEffect(() => {
    setLoading(false);
    saveHandler(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, router, params.get("query")]);

  return loading ? <UserList fetchPosts={saveHandler} /> : null;
};

export default Users;
